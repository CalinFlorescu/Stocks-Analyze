const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
const BASE_URL = process.env.ALPHAVANTAGE_URL;

const priceData = []

const getRawData = async () => {
    await axios.get(`${BASE_URL}&symbol=INTC&apikey=${API_KEY}`)
    .then(data => {
        Object.keys(data.data['Time Series (Daily)']).forEach(key => {
            priceData.push({
                day: key,
                open: data.data['Time Series (Daily)'][key]['1. open'],
                close: data.data['Time Series (Daily)'][key]['4. close'],
                volume: data.data['Time Series (Daily)'][key]['5. volume']
            })
        })
    });

    console.log(priceData);
}

getRawData();

