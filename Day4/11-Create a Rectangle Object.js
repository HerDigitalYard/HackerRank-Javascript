/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-objects/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  let perimeter, area, length, width;
  let obj = {};
  length = a;
  width = b;
  perimeter = 2 * (length + width);
  area = length * width;

  obj["perimeter"] = perimeter;
  obj[`area`] = area;
  obj[`length`] = length;
  obj[`width`] = width;

  return obj;
}
