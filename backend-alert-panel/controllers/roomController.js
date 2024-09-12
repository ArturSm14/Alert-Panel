import { connectDB, getDB } from "../config/db.js";
import RoomRepository from "../repositories/roomRepository.js";


const RoomController = {
    registerRoom: async (req, res) => {

        const { floor, number , studentsCapacity, resources } = req.body;

        if (!floor || !number || !studentsCapacity) {
            return res.status(400).send('Invalid data');  
        }

        await connectDB();

        const db = await getDB();
        
        RoomRepository.createRoom(db, { 
            floor, 
            number, 
            studentsCapacity, 
            resources 
        });

        res.status(201).send('Room registered successfully');
    },
    getRooms: async (req, res) => {
        const db = await getDB();
        const rooms = await RoomRepository.getRooms(db);

        res.send(rooms);
    },
    getRoomById: async (req, res) => {
        const { id } = req.params;
        const db = await getDB();
        const room = await RoomRepository.getRoomById(db, id);

        if (!room) {
            return res.status(404).send('Room not found');
        }

        res.send(room);
    },
    updateRoom: async (req, res) => {
        const { id } = req.params;
        const { floor, number, studentsCapacity, resources } = req.body;

        if (!floor || !number || !studentsCapacity) {
            return res.status(400).send('Invalid data');
        }

        const db = await getDB();
        const room = await RoomRepository.getRoomById(db, id);

        if (!room) {
            return res.status(404).send('Room not found');
        }

        await RoomRepository.updateRoom(db, id, {
            floor,
            number,
            studentsCapacity,
            resources
        });

        res.send('Room updated successfully');
    },
    deleteRoom: async (req, res) => {
        const { id } = req.params;
        const db = await getDB();
        const room = await RoomRepository.getRoomById(db, id);

        if (!room) {
            return res.status(404).send('Room not found');
        }

        await RoomRepository.deleteRoom(db, id);

        res.send('Room deleted successfully');
    }
}

export default RoomController;