import mongoose from 'mongoose';
import logger from '../config/logger';

export const connectDB = async () => {
    try {

        const mongoURI = process.env.MONGO_URI;
        await mongoose.connect(mongoURI!);
        logger.info('MongoDB Connected...');
    } catch (err: any) {
        logger.error('MongoDB connection error: ' + err.message);
        process.exit(1);
    }
};
