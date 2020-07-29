module.exports = (reversedArray) => {
  reversedArray.forEach((day) => {
    if (day.MACD && day.signalLine) {
      day.histogram = day.MACD - day.signalLine;
    }
  });

  return reversedArray;
};
