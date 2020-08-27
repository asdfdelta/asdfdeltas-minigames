const assert = require("assert");
const bluebird = require("bluebird");
const client = bluebird.promisifyAll(require('mongodb')).MongoClient;

let _db;

module.exports = {
  getDb,
  initDb
}

function initDb(callback){
  if(_db){
    console.warn("Trying to init DB again!");
    return callback(null, _db);
  }

  client.connect("mongodb://"+process.env.MONGODB_HOST+":"+process.env.MONGODB_PORT+"/", connected);

  function connected(err, db){
    if(err){
      return callback(err);
    }
    console.log("Database initialized.");
    _db = db.db("minigames");
    return callback(null, _db);
  }
}

function getDb(){
  assert.ok(_db, "Db has not be initialized. Please call init first.");
  return _db;
}
