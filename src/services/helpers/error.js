const error = (status, message) => {
  const errorMessage = { status, message };
  throw errorMessage;
};

module.exports = {
  error,
};
