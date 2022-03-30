/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-throw/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function isPositive(a) {
  if (a > 0) {
    throw new Error("YES");
  } else if (a == 0) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  }
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
