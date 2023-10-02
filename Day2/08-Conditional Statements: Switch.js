/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-switch/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function getLetter(s) {
    let letter;
    // Write your code here
    
    switch (true) {
        case 'aeiou'.includes(s[0]):
            return 'A';
        case 'bcdfg'.includes(s[0]):
            return 'B';
        case 'hjklm'.includes(s[0]):
            return 'C';
        case 'npqrstvwxyz'.includes(s[0]):
            return 'D';
        default:
            return 'Invalid input';
    }
    
    return letter;
}

  