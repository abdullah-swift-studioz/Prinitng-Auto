import { Router } from 'express';
import { authenticate, AuthenticatedRequest } from '../middleware/auth';
import { prisma } from '../config/db';

const router = Router();

router.get('/balance', authenticate, async (req: AuthenticatedRequest, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
        if (!user) return res.status(404).json({ error: 'User not found' });
        
        const topUps = await prisma.topUpRequest.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        });
        
        return res.json({ balance: user.balance, topUps });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch balance' });
    }
});

router.post('/request-topup', authenticate, async (req: AuthenticatedRequest, res) => {
    try {
        let { amount, nayapayAccountTitle } = req.body;
        amount = parseFloat(amount);
        
        if (isNaN(amount) || amount <= 0 || !nayapayAccountTitle) {
            return res.status(400).json({ error: 'Invalid amount or account title' });
        }
        
        const request = await prisma.topUpRequest.create({
            data: {
                userId: req.user!.id,
                amount,
                nayapayAccountTitle: nayapayAccountTitle.trim(),
                status: 'PENDING'
            }
        });
        
        return res.json({ success: true, request });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to submit topup request' });
    }
});

// Admin endpoints
router.get('/admin/topups', async (req, res) => {
    try {
        const requests = await prisma.topUpRequest.findMany({
            where: { status: 'PENDING' },
            include: { user: { select: { email: true } } },
            orderBy: { createdAt: 'desc' }
        });
        return res.json(requests);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to load topups' });
    }
});

router.post('/admin/approve/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const request = await prisma.topUpRequest.findUnique({ where: { id } });
        
        if (!request || request.status !== 'PENDING') {
            return res.status(400).json({ error: 'Request not found or not pending' });
        }
        
        await prisma.$transaction([
            prisma.topUpRequest.update({
                where: { id },
                data: { status: 'APPROVED', processedAt: new Date() }
            }),
            prisma.user.update({
                where: { id: request.userId },
                data: { balance: { increment: request.amount } }
            })
        ]);
        
        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to approve' });
    }
});

router.post('/admin/reject/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const request = await prisma.topUpRequest.findUnique({ where: { id } });
        
        if (!request || request.status !== 'PENDING') {
            return res.status(400).json({ error: 'Request not found or not pending' });
        }

        await prisma.topUpRequest.update({
            where: { id },
            data: { status: 'REJECTED', processedAt: new Date() }
        });
        
        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to reject' });
    }
});

export default router;
