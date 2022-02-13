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

module.exports = {
  validateTitle,
};
