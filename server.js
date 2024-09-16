
import  express from'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json()); 



// Connect to MongoDB
const connectDB = async () => {
  try { 
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('\x1b[33m%s\x1b[0m', `Server running on port ${PORT}`);
});
