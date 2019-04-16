let isPalindromeArray = [];
let notPalindromeArray = [];
const isPalindrome = word => {
  for (let i = 0; i < Math.floor(word.length/2); i++) {
    if (word[i] === word[word.length - (i + 1)]) {
        isPalindromeArray.push(word);
        } else {
        notPalindromeArray.push(word);
        }
    }
        console.log(isPalindromeArray);
        console.log(notPalindromeArray);
}

isPalindrome("anna");
