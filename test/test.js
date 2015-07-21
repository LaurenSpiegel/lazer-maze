
var chai = require("chai");
var expect = chai.expect;
var makeBoard = require("../makeBoard");
var runMaze = require("../runMaze");


describe("makeBoard()",function(){

  it("should make a board with no mirrors",function(){
    var array = ["2 2", "1 2 S"]
    var boardWidth = 2;
    var boardHeight = 2;
    expect(JSON.stringify(makeBoard(array, boardWidth, boardHeight))).to.equal("[[0,0],[0,0]]");
  });


  it("should make a board with forward-slash mirrors",function(){
    var array = ["3 3", "2 2 N", "0 1 /", "1 1 /"];
    var boardWidth = 3;
    var boardHeight = 3;
    expect(JSON.stringify(makeBoard(array, boardWidth, boardHeight))).to.equal('[[0,0,0],["/","/",0],[0,0,0]]');
  });


  it("should make a board with back-slash mirrors",function(){
    var array = ["3 3", "2 2 N", "0 1 \\", "1 1 \\"];
    var boardWidth = 3;
    var boardHeight = 3;
    expect(JSON.stringify(makeBoard(array, boardWidth, boardHeight))).to.equal('[[0,0,0],["\\\\","\\\\",0],[0,0,0]]');
  });


});


describe("runMaze()",function(){


  it("should return -1 if there is a loop",function(){

    var board = [ [ 0, 0, '\\', 0 ], [ 0, '/', '/', 0 ], [ 0, '\\', '/', 0 ] ]
    var boardWidth = 4;
    var boardHeight = 3;
    var playerStartXCoord = 0;
    var playerStartYCoord = 0;
    var playerDirection = "E";

    expect(runMaze(board, boardWidth, boardHeight, playerStartXCoord, playerStartYCoord, playerDirection)).to.equal("-1\n ");
  });


  it("should run without mirrors",function(){

    var board = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
    var boardWidth = 4;
    var boardHeight = 3;
    var playerStartXCoord = 0;
    var playerStartYCoord = 0;
    var playerDirection = "E";

    expect(runMaze(board, boardWidth, boardHeight, playerStartXCoord, playerStartYCoord, playerDirection)).to.equal("3\n3 2");
  });


  it("should run with mirrors",function(){

    var board = [ [ 0, 0, '\\', 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
    var boardWidth = 4;
    var boardHeight = 3;
    var playerStartXCoord = 0;
    var playerStartYCoord = 0;
    var playerDirection = "E";

    expect(runMaze(board, boardWidth, boardHeight, playerStartXCoord, playerStartYCoord, playerDirection)).to.equal("4\n2 0");
  });


});




