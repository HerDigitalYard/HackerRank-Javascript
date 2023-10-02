/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-bitwise/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let bitwiseAnd = i & j;
            if (bitwiseAnd < k && bitwiseAnd > max) {
                max = bitwiseAnd;
            }
        }
    }
    return max;
}