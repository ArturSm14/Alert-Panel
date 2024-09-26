import { EMPLOYEES_COLLECTION } from "../utils/constants/collections.js";

const EmployeeRepository = {
    getEmployeeById: async  (id) => {
        const idAsObjectId = ObjectId.createFromHexString(id);

        return await db.collection(EMPLOYEES_COLLECTION).findOne({ _id: idAsObjectId });
    },
    getEmployees: async () => {
        return await db.collection(EMPLOYEES_COLLECTION).find().toArray();
    },
    createEmployee: async (employee) => {
        await db.collection(EMPLOYEES_COLLECTION).insertOne(employee);
    },
    updateEmployee: async (id, employee) => {
        const idAsObjectId = ObjectId.createFromHexString(id);

        await db.collection(EMPLOYEES_COLLECTION).updateOne({ _id: idAsObjectId }, { $set: employee });
    },
    deleteEmployee: async (id) => {
        const idAsObjectId = ObjectId.createFromHexString(id);

        await db.collection(EMPLOYEES_COLLECTION).deleteOne({ _id: idAsObjectId });
    }
}

export default EmployeeRepository;