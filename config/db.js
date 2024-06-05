/*import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường từ file .env

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`.bgRed.white);
        process.exit(1); // Dừng chương trình nếu kết nối thất bại
    }
};

export default connectDB;*/
import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongoDB database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error mongoDB ${error}`.bgRed.white);
    }
};

export default connectDB;