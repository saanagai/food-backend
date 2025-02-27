import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("MongoDb d amjilttai holbogdloo");
  } catch (error) {
    console.log("MongoDb d aldaa garlaa");
  }
};
