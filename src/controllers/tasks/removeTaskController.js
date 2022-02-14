const { removeTaskService } = require('../../services');

const removeTaskController = async (req, res) => {
  try {
    const { id } = req.body;
    const taskData = await removeTaskService(id);
    return res.status(taskData.status).json({ message: taskData.message });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  removeTaskController,
};
