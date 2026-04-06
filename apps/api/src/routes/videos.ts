import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'uploads/videos';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.random().toString(36).substring(2);
        const ext = path.extname(file.originalname);
        cb(null, unique + ext);
    },
});

const upload = multer({
    storage: videoStorage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Only video files are allowed') as any, false);
        }
    },
});

interface Video {
    id: string;
    filename: string;
    originalname: string;
    size: number;
    mimetype: string;
    uploadedAt: string;
}

const videos: Video[] = [];

// GET /api/videos
router.get('/', (req, res) => {
    res.json(videos);
});

// POST /api/videos
router.post('/', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No video uploaded' });
    }

    const video: Video = {
        id: req.file.filename,
        filename: req.file.filename,
        originalname: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        uploadedAt: new Date().toISOString(),
    };

    videos.push(video);
    res.json(video);
});

// DELETE /api/videos/:id
router.delete('/:id', (req, res) => {
    const idx = videos.findIndex(v => v.id === req.params.id);
    if (idx === -1) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const [video] = videos.splice(idx, 1);

    const filePath = path.join('uploads/videos', video.filename);
    try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch { /* ignore fs errors */ }

    res.json({ success: true });
});

export default router;
