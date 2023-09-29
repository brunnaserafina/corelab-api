import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGO_URI);

export default async function mongodb() {
  try {
    const connect = mongoClient.db("corenotes");
    return connect;
  } catch (error) {
    console.log(error);
    return error;
  }
}
