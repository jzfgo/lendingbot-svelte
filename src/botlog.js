const getJSON = async () => {
  let res = await fetch(`/botlog.json?${Date.now()}`);
  let data = await res.json();
  return data;
};

const processLog = (data) => {
  let logProcessed = [];

  if (data && data.log) {
    data.log.reverse();
    logProcessed = data.log.map((item) => ({
      time: item.substr(0, 19),
      message: item.substr(20),
    }));
  }

  return logProcessed;
};

const processCurrency = (ticker, data, displayCurrency) => {
  const exchangeRate = displayCurrency.highestBid;
  let tickerRate = data[ticker].highestBid || 1;

  return {
    ticker: ticker.toLowerCase(),
    pctLent: data[ticker].lentSum / data[ticker].maxToLend,
    earningsTotal:
      (data[ticker].totalEarnings || 0) * tickerRate * exchangeRate,
    earnings24h:
      (data[ticker].yesterdayEarnings || 0) * tickerRate * exchangeRate,
  };
};

const processCurrencies = (data) => {
  let currencies = [];
  let summary = {};

  if (data && data['raw_data']) {
    const tickers = Object.keys(data.raw_data);

    tickers.forEach((ticker) => {
      let currency = processCurrency(
        ticker,
        data.raw_data,
        data.outputCurrency
      );
      currencies.push(currency);
    });

    summary = currencies.reduce((a, b) => ({
      earningsTotal: a.earningsTotal + b.earningsTotal,
      earnings24h: a.earnings24h + b.earnings24h,
    }));

    return { currencies, summary };
  }

  return currencies;
};

export default async () => {
  const botlog = await getJSON();

  return {
    ...processCurrencies(botlog),
    log: processLog(botlog),
  };
};
