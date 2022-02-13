require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.MONGO_URL;

let db = null;

const getConnection = async () => {
  if (db) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
    db = conn.db(
      process.env.NODE_ENV === 'test'
        ? process.env.DB_TEST
        : process.env.DB_TASK,
    );
    return db;
  });
};

module.exports = {
  getConnection,
};
