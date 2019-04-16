let isPalindromeArray = [];
let notPalindromeArray = [];
const isPalindrome = (word) => {
    let index = 0
    let result = []
    for (let i=0; i < word.length; i++) {
        if (word[i] === word[word.length - (index += 1)]) {
            result.push('true')
        } else {
            result.push('false')
        }
    }
    if (result.includes('false')) {
        notPalindromeArray.push(word)
        return
    } else {
        isPalindromeArray.push(word)
    }
}



//Just for testing
let wordList = ['Dog', 'Anna', 'Kayak', 'Javascript', 'Racecar', 'Radar', 'Word', 'Redder', 'Random', 'Repaper', 'test', 'cat']
let caseLower
const run = (list) => {
    for (let z=0; z < list.length; z++) {
        caseLower = list[z].toLowerCase()
        isPalindrome(caseLower)
    }
}    

run(wordList)

console.log(isPalindromeArray)
console.log(notPalindromeArray)

// console.log(caseLower + ' is NOT a palindrome')
// console.log(caseLower + ' is a palindrome')