
'use strict';

module.exports = function(array, boardWidth, boardHeight) {

  var board = [];


  //Creat board as 2D array

  for(var i=0; i< boardHeight; i++){
    board.push([]);
    for(var j=0; j<boardWidth; j++){
      board[i].push(0);
    }
  }

  //If no mirrors in input, return board

  if(array.length === 2 || array[2] === ""){
    return board;
  }

  //Place mirrors

  for(var k=2; k<array.length; k++){
    var xCoord = Number(array[k][0]);

    //Switch Cartesian y-coord to array coordinates by subtracting Cartesian y-coord from boardHeight minus 1
    var yCoord = boardHeight - (Number(array[k][2]) + 1);
    var direction = array[k][4];

    board[yCoord][xCoord] = direction;
  }


  return board;
}