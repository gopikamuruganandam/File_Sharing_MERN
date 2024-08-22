import express from 'express';
import { uploadFinally,downloadFile } from '../controllers/upload.js';
import middleWare from '../controllers/middlerWare.js';

const router=express.Router();

router.post('/upload',middleWare.single("file"), uploadFinally);
router.get('/CollectionForFileSharingApp/:fileId',downloadFile)

export default router;