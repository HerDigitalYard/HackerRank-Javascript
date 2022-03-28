/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-function/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function main() {
  const n = +readLine();

  console.log(factorial(n));
}
