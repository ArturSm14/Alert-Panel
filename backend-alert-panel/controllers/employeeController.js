import EmployeeRepository from "../repositories/employeeRepository.js";

const EmployeeController = {
    getEmployees: async (req, res) => {
        const db = await getDB();

        const employees = await EmployeeRepository.getEmployees(db);

        res.send(employees);
    },
    getEmployeeById: async (req, res) => {
        const { id } = req.params;
        const db = await getDB();
        const employee = await EmployeeRepository.getEmployeeById(db, id);

        if (!employee) {
            return res.status(404).send('Employee not found');
        }

        res.send(employee);
    },
    createEmployee: async (req, res) => {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).send('Invalid data');
        }

        const db = await getDB();

        await EmployeeRepository.createEmployee(db, {
            name,
            email,
            phone
        });

        res.send('Employee created successfully');
    },
    updateEmployee: async (req, res) => {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).send('Invalid data');
        }

        const db = await getDB();
        const employee = await EmployeeRepository.getEmployeeById(db, id);

        if (!employee) {
            return res.status(404).send('Employee not found');
        }

        await EmployeeRepository.updateEmployee(db, id, {
            name,
            email,
            phone
        });

        res.send('Employee updated successfully');
    },
    deleteEmployee: async (req, res) => {
        const { id } = req.params;
        const db = await getDB();
        const employee = await EmployeeRepository.getEmployeeById(db, id);

        if (!employee) {
            return res.status(404).send('Employee not found');
        }

        await EmployeeRepository.deleteEmployee(db, id);

        res.send('Employee deleted successfully');
    }
}

export default EmployeeController;