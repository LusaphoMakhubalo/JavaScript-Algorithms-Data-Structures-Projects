function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let change = [];
    let totalCID = 0;
  
    for (let i = 0; i < cid.length; i++) {
      totalCID += cid[i][1];
    }
  
    let changeDue = cash - price;
  
    if (changeDue > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (changeDue === totalCID) {
      return { status: "CLOSED", change: cid };
    }
  
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const currencyName = currencyUnits[i][0];
      const currencyValue = currencyUnits[i][1];
      let currencyTotal = cid[i][1];
      let currencyCount = 0;
  
      while (changeDue >= currencyValue && currencyTotal > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyTotal -= currencyValue;
        currencyCount++;
      }
  
      if (currencyCount > 0) {
        change.push([currencyName, currencyValue * currencyCount]);
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);