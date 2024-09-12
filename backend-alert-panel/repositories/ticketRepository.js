import { ROOMS_COLLECTION } from "../utils/constants/collections.js";

const TicketRepository = {
    getTickets: async () => {
        return await db.collection(ROOMS_COLLECTION).find().toArray();
    },
    getTicketById: async (id) => {
        return await db.collection(ROOMS_COLLECTION).findOne({ _id: id });
    },
    createTicket: async (ticket) => {
        await db.collection(ROOMS_COLLECTION).insertOne(ticket);
    },
    updateTicket: async (id, ticket) => {
        await db.collection(ROOMS_COLLECTION).updateOne({ _id: id }, { $set: ticket });
    },
    deleteTicket: async (id) => {
        await db.collection(ROOMS_COLLECTION).deleteOne({ _id: id });
    }
}