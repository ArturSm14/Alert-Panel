import { ROOMS_COLLECTION } from "../utils/constants/collections.js";

const RoomRepository = {
    async createRoom(db, room) {
        await db.collection(ROOMS_COLLECTION).insertOne(room);
    },
    async getRooms(db) {
        return await db.collection(ROOMS_COLLECTION).find().toArray();
    },
    async getRoomById(db, id) {
        return await db.collection(ROOMS_COLLECTION).findOne({ _id: id });
    },
    async updateRoom(db, id, room) {
        await db.collection(ROOMS_COLLECTION).updateOne({ _id: id }, { $set: room });
    },
    async deleteRoom(db, id) {
        await db.collection(ROOMS_COLLECTION).deleteOne({ _id: id });
    }

}

export default RoomRepository;