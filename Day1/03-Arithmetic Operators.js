/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}
/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/

function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}
/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/

function main() {
  const length = +readLine();
  const width = +readLine();

  console.log(getArea(length, width));
  console.log(getPerimeter(length, width));
}
