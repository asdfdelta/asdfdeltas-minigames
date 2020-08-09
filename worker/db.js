import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const host = "localhost";
const port = "27017";

const client = new MongoClient(`mongodb://${host}:${port}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("minigames");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
