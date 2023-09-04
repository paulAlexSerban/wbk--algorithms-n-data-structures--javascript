/**
 * Diagonal Difference
 * 
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * 
 * For example, the square matrix arr is shown below:
 * 
 * 1 2 3
 * 4 5 6
 * 9 8 9
 * 
 * The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
 * 
 * Function Description
 * 
 * Complete the diagonalDifference function in the editor below. It must return an integer representing the absolute diagonal difference.
 * 
 * diagonalDifference takes the following parameter:
 * - arr: an array of integers .
 * 
 * Input Format
 * 
 * The first line contains a single integer, n, the number of rows and columns in the matrix arr.
 * 
 * Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].
 * 
 * Constraints
 * 
 * - -100 <= arr[i][j] <= 100
 * 
 * Output Format
 * 
 * Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
 * 
 * Sample Input
 * 
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * 
 * Sample Output
 * 
 * 15
 * 
 * Explanation
 * 
 * The primary diagonal is:
 * 
 * 11
 *   5
 *    -12
 *
 * Sum across the primary diagonal: 11 + 5 - 12 = 4 
 * 
 * The secondary diagonal is:
 * 
 *      4
 *    5
 * 10
 * 
 * Sum across the secondary diagonal: 4 + 5 + 10 = 19
 * 
 * Difference: |4 - 19| = 15
 * 
 * Note: |x| is the absolute value of x
 * 
 * @param {array} arr
 * @return {number}
 */

const diagonalDifference = (arr) => {
  let leftToRight = 0;
  let rightToLeft = 0;
  let length = arr.length - 1;

  for (let i = 0; i <= length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][length - i];
  }

  return Math.abs(leftToRight - rightToLeft);
}

console.log(diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
])); // 15
console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
])); // 2
