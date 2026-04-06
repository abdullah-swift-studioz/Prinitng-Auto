import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getPageCount } from '../services/pageCounter';

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../uploads/');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.random().toString(36).substring(2);
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, unique + ext);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const pageCount = await getPageCount(req.file);

        res.json({
            filename: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
            pageCount: pageCount,
            fileId: req.file.filename,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Processing failed' });
    }
});

export default router;
