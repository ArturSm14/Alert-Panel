import {MongoClient} from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

const connectDB = async () => {
  try {
    client = new MongoClient(uri);

    await client.connect();
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

const getDB = () => {
  if (!client) {
    throw new Error('You must connect first!');
  }
  return client.db('AlertPanelDatabase');
};

export { connectDB, getDB };