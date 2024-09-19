import { ObjectId } from "mongodb";
import { ROOMS_COLLECTION } from "../utils/constants/collections.js";

const RoomRepository = {
    async createRoom(db, room) {
        await db.collection(ROOMS_COLLECTION).insertOne(room);
    },
    async getRooms(db) {
        return await db.collection(ROOMS_COLLECTION).find().toArray();
    },
    async getRoomById(db, id) {
        const idAsObejectId =  ObjectId.createFromHexString(id);

        return await db.collection(ROOMS_COLLECTION).findOne({ _id: idAsObejectId });
    },
    async updateRoom(db, id, room) {
        const isAsObjectId =  ObjectId.createFromHexString(id);

        await db.collection(ROOMS_COLLECTION).updateOne({ _id: isAsObjectId }, { $set: room });
    },
    async deleteRoom(db, id) {
        const isAsObjectId =  ObjectId.createFromHexString(id);
        await db.collection(ROOMS_COLLECTION).deleteOne({ _id: isAsObjectId });
    },
    async repairRoom(db, id) {
        const isAsObjectId =  ObjectId.createFromHexString(id);

        await db.collection(ROOMS_COLLECTION).updateOne({ _id: isAsObjectId },
            { $set: { redirect: null, inoperatedResources: [] } });
    },
    async redirectRoom(db, id, redirect) {
        const idAsObejectId =  ObjectId.createFromHexString(id);
        const rediretAsObjectId =  ObjectId.createFromHexString(redirect.to);

        await db.collection(ROOMS_COLLECTION).updateOne({ _id: idAsObejectId},
            { $set: { redirect: {
                to : rediretAsObjectId,
                experationDate: redirect.experationDate
            } } });
    },
    async submitIssueRoom(db, id, inoperatedResources) {
        const idAsObejectId =  ObjectId.createFromHexString(id);
        
        await db.collection(ROOMS_COLLECTION).updateOne({ _id: idAsObejectId },
            { $set: { inoperatedResources } });
    },
}

export default RoomRepository;