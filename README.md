# JavaScript-Algorithms-Data-Structures-Projects
Palindrome Checker(Project 1)

function palindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  var reversedStr = formattedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return formattedStr === reversedStr;
}

console.log(palindrome("eye"));  // Output: true



Caesars Cipher(Project-3)
function rot13(str) {
  var decodedStr = "";
  
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {  // Check if the character is a capital letter
      // Shift the character code by 13 positions
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    
    decodedStr += String.fromCharCode(charCode);  // Convert the character code back to a letter and add it to the decoded string
  }
  
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));  // Output: "FREE CODE CAMP"

Telephone Number Validator(Project-4)
function telephoneCheck(str) {
  // Regular expression pattern for validating US phone numbers
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

  // Test the string against the regex pattern
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // Output: true

Cash Register (Project 5)
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
