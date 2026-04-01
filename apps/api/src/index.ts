import express from 'express';
import cors from 'cors';
import uploadRouter from './routes/upload';
import jobsRouter from './routes/jobs';

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/upload', uploadRouter);
app.use('/api/jobs', jobsRouter);

app.get('/', (req, res) => {
    res.send('Printing Kiosk API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
