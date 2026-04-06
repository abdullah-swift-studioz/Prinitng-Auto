import express from 'express';
import cors from 'cors';
import uploadRouter from './routes/upload';
import jobsRouter from './routes/jobs';
import videosRouter from './routes/videos';

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Kept for backwards compatibility
app.use('/api/uploads', express.static('uploads')); // Proxy-safe route

import authRouter from './routes/auth';
import walletRouter from './routes/wallet';

app.use('/api/auth', authRouter);
app.use('/api/wallet', walletRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/videos', videosRouter);

app.get('/', (req, res) => {
    res.send('Printing Kiosk API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
