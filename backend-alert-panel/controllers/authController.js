import AuthRepository from '../repositories/authRepository.js';
import {getDB} from "../config/db.js";
import bcrypt from 'bcrypt';

const AuthController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const db = await getDB();

        const user = await AuthRepository.login(db, email);

        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid credentials');
        }

        res.send({
            id: user._id,
            email: user.email
        });
    },
    register: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('Invalid data');
        }

        const db = await getDB();

        const hashedPassword = await bcrypt.hash(password, 10);

        console.info('hashedPassword: ', hashedPassword);

        await AuthRepository.register(db, {
            email,
            password: hashedPassword
        });

        res.send('User registered successfully');
    }
}

export default AuthController;