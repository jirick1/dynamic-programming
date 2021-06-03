/**
 * 
This problem was asked by Microsoft.
You have an N by N board. Write a function that, given N, 
returns the number of possible arrangements of the board 
where N queens can be placed on the board without threatening 
each other, i.e. no two queens share the same row, column, or diagonal.
 * 
 */

const intercepts = (x1, x2, y1, y2) => {
  return Math.abs(x1 - x2) == Math.abs(y1 - y2);
}

const nBynBoard = (point, board) => {
  let count = 0;
  let totalSpaces = board*board;


  for (let x = 0; x < board; x++) {
    for (let y = 0; y < board; y++) {
      if (point.x == x || point.y == y || intercepts(point.x, x, point.y, y)) {
        count++;
      }
    }
  }

  const possibleSpaces = totalSpaces - count;
  return possibleSpaces;
}

console.log(nBynBoard({x: 0, y: 0}, 4)); // 6
console.log(nBynBoard({x: 2, y: 2 }, 4)); // 4
console.log(nBynBoard({x: 2, y: 3 }, 4)); // 6