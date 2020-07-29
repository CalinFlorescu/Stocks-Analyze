module.exports = (reversedArray) => {
  const sum = reversedArray.reduce((acc, date, index) => {
    if (index < 26) {
      return (acc += date.close);
    }

    return acc;
  }, 0);

  const SMA = sum / 26;

  const weightMultiplier = 2 / 26 + 1;

  reversedArray.forEach((day, index) => {
    if (index === 25) {
      day.longEMA = (day.close - SMA) * weightMultiplier + SMA;
    } else if (index > 25) {
      day.longEMA =
        (day.close - reversedArray[index - 1].longEMA) * weightMultiplier +
        reversedArray[index - 1].longEMA;
    }
  });

  return reversedArray;
};
