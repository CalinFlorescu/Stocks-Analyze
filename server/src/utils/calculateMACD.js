module.exports = (reversedArray) => {
  reversedArray.forEach((day) => {
    if (day.shortEMA && day.longEMA) {
      day.MACD = day.shortEMA - day.longEMA;
    }
  });

  return reversedArray;
};
