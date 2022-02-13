const { newTaskService } = require('../../services');

const newTaskController = async (req, res) => {
  const { title } = req.body;
  const taskData = await newTaskService(title);
  return res.status(taskData.status).json({ message: taskData.message });
};

module.exports = {
  newTaskController,
};
