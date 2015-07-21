
'use strict';

module.exports = function(board, boardWidth, boardHeight, playerStartXCoord, playerStartYCoord, playerDirection) {

  var totalSquares = 0;
  var endXCoord = "";
  var endYCoord = "";


  var move = function(playerXCoord, playerYCoord, direction){

    var newDirection = direction;
    var newX = playerXCoord;
    var newY = playerYCoord;


    //Check to see if have a loop and if so return -1 for totalSquares

    if(board[playerYCoord][playerXCoord] === 1){
      totalSquares = -1;
      return;
    }

    //Check to see if hit forwardSlash mirror and if so change direction

    if(board[playerYCoord][playerXCoord] === "/"){
      if(direction === "S"){
        newDirection = "W";
      }

      if(direction === "N"){
        newDirection = "E";
      }

      if(direction === "E"){
        newDirection = "N";
      }

      if(direction === "W"){
        newDirection = "S";
      }

    }

    //Check to see if hit backSlash mirror and if so change direction

    if(board[playerYCoord][playerXCoord] === "\\"){
      if(direction === "S"){
        newDirection = "E";
      }

      if(direction === "N"){
        newDirection = "W";
      }

      if(direction === "E"){
        newDirection = "S";
      }

      if(direction === "W"){
        newDirection = "N";
      }

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

    //Toggle current square to 1 so know visited

    board[playerYCoord][playerXCoord] = 1;

    //Keep moving
 
    move(newX, newY, newDirection);


  };

  //Run move sub-routine starting with original coordinates and direction

  move(playerStartXCoord, playerStartYCoord, playerDirection);

  //Build output string

  var finalString= totalSquares + "\n" + endXCoord + " " + endYCoord;

  return finalString;
};

