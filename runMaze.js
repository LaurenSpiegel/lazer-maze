
'use strict';

var changeDirection = require('./changeDirection');

module.exports = function(board, boardWidth, boardHeight, playerStartXCoord, playerStartYCoord, playerDirection) {

  var totalSquares = 0;
  var endXCoord = "";
  var endYCoord = "";


  var move = function(playerXCoord, playerYCoord, direction){

    var newDirection = direction;
    var newX = playerXCoord;
    var newY = playerYCoord;
    var currentSquare = board[playerYCoord][playerXCoord];


    //Check to see if have a loop and if so return -1 for totalSquares

    if(currentSquare === 1){
      totalSquares = -1;
      return;
    }

    //Check to see if hit mirror and if so change direction

    if(currentSquare === "/" || currentSquare === "\\"){
      newDirection = changeDirection(direction, board[playerYCoord][playerXCoord]);
    }


    //Determine coordinates for next move

    if(newDirection === "S"){
      newY = playerYCoord + 1;
    }

    if(newDirection === "N"){
      newY = playerYCoord - 1;
    }

    if(newDirection === "E"){
      newX = playerXCoord + 1;
    }

    if(newDirection === "W"){
      newX = playerXCoord - 1;
    }



    //Check to see if hit wall on next move and if so return with current coordinates before hitting wall
    if(newX > boardWidth-1 || newX < 0 || newY > boardHeight-1 || newY < 0){
      endXCoord = playerXCoord;

      //Switch array coordinates back to Cartesian coordinates
      endYCoord = boardHeight - (playerYCoord + 1);
      return;
    }

    //Increment total squares visited

    totalSquares++;

    //Change current square to 1 so know visited

    board[playerYCoord][playerXCoord] = 1;

    //Keep moving
 
    move(newX, newY, newDirection);


  };

  //Run move sub-routine starting with original coordinates and direction

  move(playerStartXCoord, playerStartYCoord, playerDirection);

  //Build output string

  var finalString = totalSquares + "\n" + endXCoord + " " + endYCoord;

  return finalString;
};

