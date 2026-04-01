import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';

export const countPdfPages = async (filePath: string): Promise<number> => {
    try {
        const fileBuffer = await fs.readFile(filePath);
        const pdfDoc = await PDFDocument.load(fileBuffer);
        return pdfDoc.getPageCount();
    } catch (error) {
        console.error('Error counting PDF pages:', error);
        throw new Error('Failed to parse PDF');
    }
};

export const getPageCount = async (file: Express.Multer.File): Promise<number> => {
    if (file.mimetype === 'application/pdf') {
        return await countPdfPages(file.path);
    } else if (file.mimetype.startsWith('image/')) {
        return 1; // Images are 1 page
    }
    return 0;
}
