'use strict';

module.exports = function(playerXCoord, playerYCoord, direction, board, boardWidth, boardHeight){

    var newDirection = direction;
    var newX = playerXCoord;
    var newY = playerYCoord;


    //Check to see if have a loop and if so return -1 for totalSquares

    if(board[playerYCoord][playerXCoord] === 1){
       totalSquares = -1;
      return;
    }

    //Check to see if hit forwardSlash mirror and if so change direction

    if(board[playerYCoord][playerXCoord] === "forwardSlash"){
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

    if(board[playerYCoord][playerXCoord] === "backSlash"){
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



    //Check to see if hit wall on next move and if so return with coordinates before hitting wall
    if(newX > boardWidth-1 || newX < 0 || newY > boardHeight-1 || newY < 0){
      endXCoord = playerXCoord;
      endYCoord = boardHeight - (playerYCoord + 1);
      return;
    }

    //Increment total squares visited

    totalSquares++;

    //Toggle current square to 1 so know visited

    board[playerYCoord][playerXCoord] = 1;

    //Keep moving
 
    move(newX, newY, newDirection, board, boardWidth, boardHeight, totalSquares);


  };

