import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './config/logger';
import { connectDB } from './database/connection';
import apiRoutes from './routes/api';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(helmet());
app.use(cors());
app.use(express.json());


connectDB();


app.use('/api', apiRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
