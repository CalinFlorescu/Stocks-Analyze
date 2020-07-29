module.exports = (reversedArray) => {
  const sum = reversedArray.reduce((acc, date, index) => {
    if (index < 12) {
      return (acc += date.close);
    }

    return acc;
  }, 0);

  const SMA = sum / 12;

  const weightMultiplier = 2 / 12 + 1;

  reversedArray.forEach((day, index) => {
    if (index === 11) {
      day.shortEMA = (day.close - SMA) * weightMultiplier + SMA;
    } else if (index > 11) {
      day.shortEMA =
        (day.close - reversedArray[index - 1].shortEMA) * weightMultiplier +
        reversedArray[index - 1].shortEMA;
    }
  });

  return reversedArray;
};
