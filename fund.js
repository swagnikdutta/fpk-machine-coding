const { funds } = require('./data')

class Fund {

  getFundByName(name) {
    return _.find(funds, { name: name });
  }

  static getCommonStocks(stockListA, stockListB) {
    return _.intersection(stockListA, stockListB);
  }

  static addStockToFund(fundName, stock) {
    const fund = this.getFundByName(fundName);
    fund.stocks.push(fundName);
  }

  static getCommonStocksCount(fundNameA, fundNameB) {
    const fundA = this.getFundByName(fundNameA);
    const fundB = this.getFundByName(fundNameB);

    const fundAStocks = fundA && fundA.stocks || [];
    const fundBStocks = fundB && fundB.stocks || [];

    const commonStocks = this.getCommonStocks(fundAStocks, fundBStocks);
    return commonStocks.length;
  }

  static getStocksCountFromFund(fundName) {
    const fund = this.getFundByName(fundName);
    return fund.stocks && fund.stocks.length || 0;
  }
}

module.exports = Fund