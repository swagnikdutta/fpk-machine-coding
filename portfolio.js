const Fund = require("./fund");

class portfolio {
  constructor() {
    this.funds = [];
    this.fundObj = Fund();

    // funds = [ // array of funds
    //   {
    //     name: "fund name",
    //     stocks: []
    //   }
    // ]
  }

  addFund(fund) { 
    this.funds.push(fund);
  }

  calculateFundOverlap(fundA, fundB) {
    const overlapPercent = (2 * Fund.getCommonStocksCount(fundA, fundB) 
                              / (Fund.getStocksCountFromFund(userFund) + Fund.getStocksCountFromFund(fundName))) * 100;
  }

  printOverlap(p1_fund, p2_fund, overlapPercent) {
    console.log(`${p1_fund} ${p2_fund} ${overlapPercent}`);
  }

  calculatePortfolioOverlap(portfolio1, portfolio2) {
    const n = portfolio1.length;
    const m = portfolio2.length;

    portfolio1.forEach((p1_fund) => {
      portfolio2.forEach((p2_fund) => {
        const overlapPercent = calculateFundOverlap(p1_fund, p2_fund);

        printOvelap(p1_fund, p2_fund, overlapPercent);
      })
    })
    
  }
}

module.exports = portfolio;