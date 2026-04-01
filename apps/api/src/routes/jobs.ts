import { Router } from 'express';
import { checkPayment } from '../services/emailPayment';

const router = Router();

// Mock database for jobs
export const jobs: any[] = [];
let jobIdCounter = 1;

// GET /api/jobs -> List all jobs (for Admin)
router.get('/', (req, res) => {
    res.json(jobs);
});

// GET /api/jobs/kiosk/:kioskId -> Must be before /:id to avoid matching "kiosk" as id
router.get('/kiosk/:kioskId', (req, res) => {
    const { kioskId } = req.params;
    const pendingJobs = jobs.filter(j => j.kioskId === kioskId && j.status === 'PAID');
    res.json(pendingJobs);
});

// GET /api/jobs/:id -> Get single job status
router.get('/:id', (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === jobId);

    if (!job) return res.status(404).json({ error: 'Job not found' });

    res.json(job);
});

// POST /api/jobs -> Create a new job (after upload & options selection)
router.post('/', (req, res) => {
    const { fileId, pageCount, copies, kioskId } = req.body;

    // Calculate price (PKR per page)
    const PRICE_PER_PAGE = 10;
    const totalPages = pageCount * copies;
    const totalPrice = totalPages * PRICE_PER_PAGE;

    const newJob = {
        id: jobIdCounter++,
        fileId,
        pageCount,
        copies,
        kioskId,
        totalPrice,
        status: 'PENDING', // PENDING -> PAID -> PRINTING -> COMPLETED
        createdAt: new Date()
    };

    jobs.push(newJob);
    res.json(newJob);
});

// POST /api/jobs/:id/pay -> Mock payment (for dev/testing)
router.post('/:id/pay', (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === jobId);

    if (!job) return res.status(404).json({ error: 'Job not found' });

    job.status = 'PAID';
    res.json({ success: true, job });
});

// POST /api/jobs/:id/verify-payment -> Verify bank transfer via email
router.post('/:id/verify-payment', async (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === jobId);

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.status !== 'PENDING') return res.status(400).json({ error: 'Job already paid or completed' });

    const { accountTitle } = req.body;
    if (!accountTitle || typeof accountTitle !== 'string') {
        return res.status(400).json({ error: 'Account title is required' });
    }

    // Store account title on the job so admin can see it even if auto-verification fails
    job.accountTitle = accountTitle.trim();
    job.lastVerificationAttempt = new Date();

    // totalPrice is stored in PKR (pageCount * copies * 10)
    const targetAmount = job.totalPrice;

    try {
        let matched = false;
        if (process.env.SKIP_EMAIL_VERIFICATION === 'true') {
            matched = true; // Dev bypass when email not configured
        } else {
            const result = await checkPayment(targetAmount, accountTitle.trim());
            matched = result.matched;
        }

        if (matched) {
            job.status = 'PAID';
            return res.json({ success: true, job });
        }
        return res.status(400).json({ error: 'Payment not found. Please ensure you transferred the exact amount and your account title matches.' });
    } catch (error) {
        console.error('Payment verification error:', error);
        return res.status(500).json({ error: 'Payment verification failed. Please try again.' });
    }
});

// POST /api/jobs/:id/approve -> Admin manually approves a pending payment
router.post('/:id/approve', (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === jobId);

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.status !== 'PENDING') return res.status(400).json({ error: 'Job is not pending' });

    job.status = 'PAID';
    job.approvedByAdmin = true;
    job.approvedAt = new Date();
    res.json({ success: true, job });
});

// POST /api/jobs/:id/complete -> Kiosk marks job as printed
router.post('/:id/complete', (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === jobId);

    if (!job) return res.status(404).json({ error: 'Job not found' });

    job.status = 'COMPLETED';
    res.json({ success: true, job });
});

export default router;
