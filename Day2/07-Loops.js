/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-loops/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    let vowelChar = s[i].match(/[aeiou]/);
    if (vowelChar) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let consonantChar = s[i].match(/[^aeiou]/);
    if (consonantChar) {
      console.log(s[i]);
    }
  }
}
