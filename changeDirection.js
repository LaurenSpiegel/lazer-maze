
'use strict';

module.exports = function(currentDirection, mirrorType) {

    var newDirection;

  //Check to see if hit forwardSlash mirror and if so change direction

  if(mirrorType === "/"){
    if(currentDirection === "S"){
      newDirection = "W";
    }

    if(currentDirection === "N"){
      newDirection = "E";
    }

    if(currentDirection === "E"){
      newDirection = "N";
    }

    if(currentDirection === "W"){
      newDirection = "S";
    }

  }

  //Check to see if hit backSlash mirror and if so change direction

  if(mirrorType === "\\"){
    if(currentDirection === "S"){
      newDirection = "E";
    }

    if(currentDirection === "N"){
      newDirection = "W";
    }

    if(currentDirection === "E"){
      newDirection = "S";
    }

    if(currentDirection === "W"){
      newDirection = "N";
    }

  }


  return newDirection;
}