// libraries imports
const dotenv = require("dotenv");
const axios = require("axios");

// env variables
dotenv.config();

const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
const BASE_URL = process.env.ALPHAVANTAGE_URL;

// internal files imports
const mocked_data = require("../__mocks__/IBM.json");
const createShortEma = require("../utils/createShortEMA");
const createLongEma = require("../utils/createLongEMA");
const calculateMACD = require("../utils/calculateMACD");
const calculateSignalLine = require("../utils/calculateSignalLine");
const calculateHistogram = require("../utils/calculateHistogram");

const priceData = [];

module.exports = async (req, res, next) => {
  // await axios.get(`${BASE_URL}&symbol=INTC&apikey=${API_KEY}`)
  // .then(data => {
  // Object.keys(data.data['Time Series (Daily)']).forEach(key => {
  //     priceData.push({
  //         day: key,
  //         open: parseFloat(data.data['Time Series (Daily)'][key]['1. open']),
  //         close: parseFloat(data.data['Time Series (Daily)'][key]['4. close']),
  //         volume: parseFloat(data.data['Time Series (Daily)'][key]['5. volume'])
  //     })
  // })
  // });

  Object.keys(mocked_data["Time Series (Daily)"]).forEach((key) => {
    priceData.push({
      day: key,
      open: parseFloat(mocked_data["Time Series (Daily)"][key]["1. open"]),
      close: parseFloat(mocked_data["Time Series (Daily)"][key]["4. close"]),
      volume: parseFloat(mocked_data["Time Series (Daily)"][key]["5. volume"]),
    });
  });

  let reversedArray = priceData.reverse();

  // create 12 days EMA
  reversedArray = createShortEma(reversedArray);

  // create 26 days EMA
  reversedArray = createLongEma(reversedArray);

  // create MACD
  reversedArray = calculateMACD(reversedArray);

  // calculate Signal Line
  reversedArray = calculateSignalLine(reversedArray);

  // Calculate Histogram
  reversedArray = calculateHistogram(reversedArray);

  res.status(200).send(reversedArray);
};
