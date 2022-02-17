
const _ = require('lodash');

class User {
  constructor() {
    this.portfolio = [];
  }

  /**
   * Sets the portfolio of the user
   * @param {*} fundNames list of fundnames
   */
  setPortfolio(fundNames) { 
    fundNames.forEach(fundName => {
      this.portfolio.push(fundName);
    });
  }

  calculateOverlap(fundName) {
    const fund = _.find(funds, { name: fundName });

    this.portfolio.forEach((userFund) => {
      // calcualte overlap between userFund and fundName
      
      this.printOverlap(fundName, userFund, overlapPercent);
    })
  }

  getCommonStocksCount(fundA, fundB) {
    
  }

  getStocksCountFromFund(fundNmae) {
    return _.find(funds, { name: fundNmae }).stocks.length;
  }

  printOverlap(fundName, userFund, overlapPercent) {
    console.log(`${fundName} ${userFund} ${overlapPercent}`);
  }

}

module.exports = User;