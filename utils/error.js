export const createError = (error) => {
  const err = new Error();

  err.status = error.status || 500;
  err.message = error.message || "Something went wrong";
  err.success = false;

  return err;
};
