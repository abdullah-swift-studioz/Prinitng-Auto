import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/db';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

        const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (existing) return res.status(400).json({ error: 'Email already exists' });

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email: email.toLowerCase(), passwordHash, balance: 0.0 }
        });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
        return res.json({ user: { id: user.id, email: user.email, balance: user.balance }, token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Registration failed' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
        return res.json({ user: { id: user.id, email: user.email, balance: user.balance }, token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Login failed' });
    }
});

export default router;
