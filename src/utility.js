export const delay = (duration) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
};
