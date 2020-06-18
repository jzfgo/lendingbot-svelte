const getBotlog = async () => {
  let res = await fetch(`/botlog.json`);
  let data = await res.json();
  return data;
};

const processLog = async (rawData) => {
  const logProcessed = [];

  if (rawData && rawData['log']) {
    rawData.log.reverse();
    logProcessed = rawData.log.map((item) => ({
      time: item.substr(0, 19),
      message: item.substr(20),
    }));
  }

  return logProcessed;
};

// {
//   "averageLendingRate": "0.01267965418791304111632395160",
//   "lentSum": "2.04029305",
//   "maxToLend": "2.04029305",
//   "totalCoins": "2.04029305",
//   "totalEarnings": "0.0155872"
// }
// {
//   "averageLendingRate": "0.01202675408583082138842257237",
//   "couple": "BTC_ETH",
//   "highestBid": "0.024597",
//   "lentSum": "7.10483681",
//   "maxToLend": "7.10483681",
//   "todayEarnings": "0.00073477",
//   "totalCoins": "7.10483681",
//   "totalEarnings": "0.04869161",
//   "yesterdayEarnings": "0.00065547"
// }
const processCurrency = async (ticker, data) => {
  let currency = {};
  const exchangeRate = 9408.6;
  let tickerRate = data.highestBid || 1;

  currency.pctLent = rawCurrency.lentSum / rawCurrency.maxToLend;
  currency.ticker = ticker.toLowerCase();
  currency.todayEarnings = data.totalEarnings * tickerRate * exchangeRate;
  // todo
};

const processCurrencies = async (rawData) => {
  const currencies = [];

  if (rawData && rawData['raw_data']) {
    const currenciesArray = Object.keys(rawData.raw_data);

    currenciesArray.forEach((ticker) => {
      let currency = processCurrency(ticker, rawData.raw_data);
      currencies.push(currency);
    });
  }

  return currencies;
};

const buildObject = async (rawData) => {
  const botlog = await getBotlog();

  let data = {};
  data.log = await processLog(botlog);
  data.currencies = await processCurrencies(botlog);
};
