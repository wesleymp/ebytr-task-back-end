const services = require('../../services');

const allTasksController = async (_req, res) => {
  try {
    const taskData = await services.allTasksService();
    return res
      .status(taskData.status)
      .json({ message: taskData.message, data: taskData.data });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  allTasksController,
};
