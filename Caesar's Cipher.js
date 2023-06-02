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