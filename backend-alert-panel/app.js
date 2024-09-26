import express from 'express';
import logMiddleware from './middlewares/logMiddleware.js';
import rateLimitMiddleware from './middlewares/rateLimitMiddleware.js';
import roomRoutes from './routes/roomRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import cors from 'cors';

import { connectDB } from './config/db.js';

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use(logMiddleware);
app.use(rateLimitMiddleware)

app.use("/room", roomRoutes)
app.use("/employees", employeeRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});

export default app;