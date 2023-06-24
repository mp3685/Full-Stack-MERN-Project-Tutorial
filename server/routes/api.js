import express from 'express';

import { fetchGoogleAPI } from '../controllers/api.js'

const router = express.Router();

router.get('/', fetchGoogleAPI);

export default router;