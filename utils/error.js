export const createError = (error) => {
  const newError = new Error();

  newError.status = error.status || 500;
  newError.message = error.message || "Something went wrong";
  newError.success = false;

  return newError;
};
