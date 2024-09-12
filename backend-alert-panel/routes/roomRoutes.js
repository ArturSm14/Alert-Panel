import express from 'express';
import RoomController from '../controllers/roomController.js';

const router = express.Router();

router.post('/', RoomController.registerRoom); 
router.get('/', RoomController.getRooms);
router.get('/:id', RoomController.getRoomById);
router.put('/:id', RoomController.updateRoom);
router.delete('/:id', RoomController.deleteRoom);

export default router;