import express from 'express';
import RoomController from '../controllers/roomController.js';

const router = express.Router();

router.post('/register-room', RoomController.registerRoom); 

export default router;