const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'O campo titulo é obrigatório.' });
  }
  if (title.length < 6) {
    return res
      .status(400)
      .json({ message: 'O titulo deve conter pelo menos 6 caracteres.' });
  }
  return next();
};

const validateId = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'O campo id é obrigatório.' });
  }
  if (id.length !== 24) {
    return res.status(400).json({ message: 'O id deve conter 24 caracteres.' });
  }
  return next();
};

const validateStatus = (req, res, next) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ message: 'O campo status é obrigatório.' });
  }
  if (status.toString().length !== 1) {
    return res
      .status(400)
      .json({ message: 'O status deve conter 1 caracter.' });
  }
  return next();
};

module.exports = {
  validateTitle,
  validateId,
  validateStatus,
};
