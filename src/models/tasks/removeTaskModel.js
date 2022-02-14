const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

const removeTaskModel = async (id) => {
  const conn = await getConnection();
  return conn.collection('tasks').deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  removeTaskModel,
};
