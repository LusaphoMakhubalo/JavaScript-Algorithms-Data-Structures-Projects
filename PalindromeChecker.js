function palindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  var reversedStr = formattedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return formattedStr === reversedStr;
}

console.log(palindrome("eye"));  // Output: true