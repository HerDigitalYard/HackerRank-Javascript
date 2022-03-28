/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-let-and-const/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function main() {
  const PI = Math.PI;
  let area, perimeter, r;
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  r = readLine();
  // Print the area of the circle:
  area = PI * (r * r);
  console.log(area);
  // Print the perimeter of the circle:
  perimeter = 2 * PI * r;
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
