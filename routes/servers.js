import express from 'express';
const router = express.Router();
import { getAll } from '../controllers/servers.js'

router.get('/api/server', getAll);

export default router;
