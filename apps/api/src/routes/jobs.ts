import { Router } from 'express';
import { checkPayment } from '../services/emailPayment';
import { authenticate, AuthenticatedRequest } from '../middleware/auth';
import { prisma } from '../config/db';

const router = Router();

// GET /api/jobs -> List all pending jobs (for Admin)
router.get('/', async (req, res) => {
    const jobs = await prisma.job.findMany({
        where: { OR: [{ status: 'PENDING' }, { status: 'PAID' }] },
        orderBy: { createdAt: 'desc' }
    });
    res.json(jobs);
});

// GET /api/jobs/kiosk/:kioskId -> Kiosk polling for PAID jobs
router.get('/kiosk/:kioskId', async (req, res) => {
    const { kioskId } = req.params;
    const pendingJobs = await prisma.job.findMany({
        where: { kioskId, status: 'PAID' }
    });
    res.json(pendingJobs);
});

// GET /api/jobs/:id -> Get single job status
router.get('/:id', async (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = await prisma.job.findUnique({ where: { id: jobId } });

    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
});

// POST /api/jobs -> Create a new job (after upload) - supports optional auth
router.post('/', async (req, res) => {
    const { fileId, pageCount, copies, kioskId, userId } = req.body;

    const PRICE_PER_PAGE = 10;
    const totalPages = pageCount * copies;
    const totalPrice = totalPages * PRICE_PER_PAGE;

    try {
        const newJob = await prisma.job.create({
            data: {
                fileId,
                pageCount,
                copies,
                kioskId,
                totalPrice,
                status: 'PENDING',
                userId: userId || null
            }
        });
        res.json(newJob);
    } catch (e) {
        res.status(500).json({ error: 'Failed to create job' });
    }
});

// POST /api/jobs/:id/pay-wallet -> Pay instantly via wallet
router.post('/:id/pay-wallet', authenticate, async (req: AuthenticatedRequest, res) => {
    const jobId = parseInt(req.params.id);
    
    try {
        const job = await prisma.job.findUnique({ where: { id: jobId } });
        if (!job) return res.status(404).json({ error: 'Job not found' });
        if (job.status !== 'PENDING') return res.status(400).json({ error: 'Job not pending' });

        const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
        if (!user || user.balance < job.totalPrice) {
            return res.status(400).json({ error: 'Insufficient wallet balance', balance: user?.balance || 0 });
        }

        await prisma.$transaction([
            prisma.user.update({
                where: { id: user.id },
                data: { balance: { decrement: job.totalPrice } }
            }),
            prisma.job.update({
                where: { id: jobId },
                data: { status: 'PAID' }
            })
        ]);

        res.json({ success: true, balance: user.balance - job.totalPrice });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Wallet payment failed' });
    }
});

// POST /api/jobs/:id/verify-payment -> Standard NayaPay email verification logic
router.post('/:id/verify-payment', async (req, res) => {
    const jobId = parseInt(req.params.id);
    
    try {
        const job = await prisma.job.findUnique({ where: { id: jobId } });
        if (!job) return res.status(404).json({ error: 'Job not found' });
        if (job.status !== 'PENDING') return res.status(400).json({ error: 'Job already paid or completed' });

        const { accountTitle } = req.body;
        if (!accountTitle || typeof accountTitle !== 'string') {
            return res.status(400).json({ error: 'Account title is required' });
        }

        // Update attempt metadata
        await prisma.job.update({
            where: { id: jobId },
            data: { accountTitle: accountTitle.trim(), lastVerificationAttempt: new Date() }
        });

        let matched = false;
        if (process.env.SKIP_EMAIL_VERIFICATION === 'true') {
            matched = true;
        } else {
            const result = await checkPayment(job.totalPrice, accountTitle.trim());
            matched = result.matched;
        }

        if (matched) {
            const updated = await prisma.job.update({
                where: { id: jobId },
                data: { status: 'PAID' }
            });
            return res.json({ success: true, job: updated });
        }
        return res.status(400).json({ error: 'Payment not found. Ensure exact transfer amount and account title.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Payment verification failed.' });
    }
});

// POST /api/jobs/:id/approve -> Admin manual approval for standard print
router.post('/:id/approve', async (req, res) => {
    const jobId = parseInt(req.params.id);
    try {
        const job = await prisma.job.update({
            where: { id: jobId },
            data: { status: 'PAID', approvedByAdmin: true, approvedAt: new Date() }
        });
        res.json({ success: true, job });
    } catch (e) {
        res.status(400).json({ error: 'Failed to approve job' });
    }
});

// POST /api/jobs/:id/complete -> Kiosk marks job as printed
router.post('/:id/complete', async (req, res) => {
    const jobId = parseInt(req.params.id);
    try {
        const job = await prisma.job.update({
            where: { id: jobId },
            data: { status: 'COMPLETED' }
        });
        res.json({ success: true, job });
    } catch (e) {
        res.status(404).json({ error: 'Job update failed' });
    }
});

export default router;
