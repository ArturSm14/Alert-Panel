import {MongoClient} from "mongodb";

const uri = 'mongodb+srv://Artsm14:Art!111418@alertpanelcluster.clvc5.mongodb.net/?retryWrites=true&w=majority&appName=AlertPanelCluster';
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