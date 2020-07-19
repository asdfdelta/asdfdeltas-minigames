import { default as MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient("mongodb://"+process.env.MONGODB_HOST+":"+process.env.MONGODB_PORT+"/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('minigames');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;