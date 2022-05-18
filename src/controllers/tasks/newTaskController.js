const services = require('../../services');

const newTaskController = async (req, res) => {
  const { title } = req.body;
  const taskData = await services.newTaskService(title);
  return res.status(taskData.status).json({ message: taskData.message });
};

module.exports = {
  newTaskController,
};
