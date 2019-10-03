import multer from 'multer';
import path from 'path';

const dotenv = require('dotenv');
dotenv.config();

export default {
    storage: multer.diskStorage({
        destination: process.env.STORAGE_PATH, // path.resolve(__dirname, '..', '..', '..', uploads)
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${Date.now()}_${name}${ext}`);
        }
    })
};