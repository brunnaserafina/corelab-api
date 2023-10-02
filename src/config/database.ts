import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let dbInstance: Db;

async function connectToDatabase(): Promise<void> {
  const mongoClient = new MongoClient(process.env.MONGO_URI);
  await mongoClient.connect();
  dbInstance = mongoClient.db("corenotes");
}

export function database(): Db {
  if (!dbInstance) {
    connectToDatabase();
  }
  return dbInstance;
}
