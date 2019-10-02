import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: process.env.STORAGE_PATH, // path.resolve(__dirname, '..', '..', '..', uploads)
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}}${path.extname(file.originalname)}`);
        }
    })
};