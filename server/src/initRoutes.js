const getStockData = require("./handlers/getStockData");

module.exports = (app) => {
  app.get("/stock", getStockData);

  return app;
};
