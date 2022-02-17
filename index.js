(() => {
  const User = require('./user');
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })


  const user_1 = new User();


  user_1.setPortfolio(["AXIS_BLUECHIP", "ICICI_PRU_BLUECHIP", "UTI_NIFTY_INDEX"])

  

  readline.question(``, (line) => {
    const params = line.split(" ");
    
    // readline.close()
  })


  
  

})();