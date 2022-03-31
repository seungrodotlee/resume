export const delay = (duration) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
};

export const getDateDiff = (startYear, startMonth) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const diff = (todayYear - startYear) * 12 - (startMonth - todayMonth);
  const year = parseInt(diff / 12);
  const month = parseInt(diff % 12);

  return `${year > 0 ? `${year}년 ` : ""}${month > 0 ? `${month}개월` : ""}`;
};
