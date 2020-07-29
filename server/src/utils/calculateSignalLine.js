module.exports = (reversedArray) => {
  const sum = reversedArray.reduce((acc, date, index) => {
    if (index < 35 && date.MACD) {
      return (acc += date.MACD);
    }

    return acc;
  }, 0);

  const SMA = sum / 9;

  const weightMultiplier = 2 / 9 + 1;

  reversedArray.forEach((day, index) => {
    if (index === 35) {
      day.signalLine = (day.MACD - SMA) * weightMultiplier + SMA;
    } else if (index > 35) {
      day.signalLine =
        (day.MACD - reversedArray[index - 1].signalLine) * weightMultiplier +
        reversedArray[index - 1].signalLine;
    }
  });

  return reversedArray;
};
