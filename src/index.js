module.exports = function solveSudoku(matrix) {
  let limit = 9, i, row, column, value, found, emptyPositions = [];
  let check = (board, column, row, value) => {
    for(let i = 0; i < board[row].length; i++) {
      if(board[row][i] === value) {
        return false;
      }
    }
    for(let i = 0; i < board.length; i++) {
      if(board[i][column] === value) {
        return false;
      }
    }
    let columnCorner = 0,
        rowCorner = 0,
        squareSize = 3;
    while(column >= columnCorner + squareSize) {
      columnCorner += squareSize;
    }
    while(row >= rowCorner + squareSize) {
      rowCorner += squareSize;
    }
    for(let i = rowCorner; i < rowCorner + squareSize; i++) {
      for(let j = columnCorner; j < columnCorner + squareSize; j++) {
        if(board[i][j] === value) {        
          return false;
        }
      }
    }
    return true;
  }
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }
  
  for(i = 0; i < emptyPositions.length;) {
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    value = matrix[row][column] + 1;
    found = false;
    while(!found && value <= limit) {
      if(check(matrix, column, row, value)){
        found = true;
        matrix[row][column] = value;
        i++;
      } 
      else {
        value++;
      }
    }
    if(!found) {
      matrix[row][column] = 0;
      i--;
    }
  }

  return matrix;
}

