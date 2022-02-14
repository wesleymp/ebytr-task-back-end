const { ObjectId } = require('mongodb');
const { getConnection } = require('../connection');

const updateTaskModel = async (payload) => {
  const conn = await getConnection();
  return conn.collection('tasks').updateOne(
    { _id: new ObjectId(payload.id) },
    {
      $set: { status: payload.status, updated_at: payload.updated_at },
    },
  );
};

module.exports = {
  updateTaskModel,
};
