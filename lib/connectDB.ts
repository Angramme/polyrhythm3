import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;
if (!DATABASE_URL) throw new Error("DATABASE_URL env variable not found!");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}