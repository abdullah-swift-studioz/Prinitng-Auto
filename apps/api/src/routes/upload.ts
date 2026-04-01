import { Router } from 'express';
import multer from 'multer';
import { getPageCount } from '../services/pageCounter';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const pageCount = await getPageCount(req.file);

        // In a real app, we would save this job to DB here.
        // For now, return the metadata.

        res.json({
            filename: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
            pageCount: pageCount,
            fileId: req.file.filename // Temp ID
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Processing failed' });
    }
});

export default router;
