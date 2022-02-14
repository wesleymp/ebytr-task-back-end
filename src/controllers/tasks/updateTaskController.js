const { updateTaskService } = require('../../services');

const updateTaskController = async (req, res) => {
  try {
    const { id, status } = req.body;
    const taskData = await updateTaskService(id, status);
    return res.status(taskData.status).json({ message: taskData.message });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  updateTaskController,
};
