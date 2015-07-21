# Lazer Maze

A command line application that builds and solves a lazer maze.  

## What is a Laser Maze?

A laser maze is a grid of squares, with a single solution. 

The player has a starting position from which he fires a laser in a specific direction (north, south, east, or west). The laser beam travels through the grid one square at a time. 

A square can be one of the following different "states”:

- Player starting position

- Empty

- Mirror

The laser beam passes through an empty square in the same direction as it entered.
A mirror changes the direction of the laser beam. For instance, a mirror represented by
“\” would change a beam traveling east to a beam traveling south. A mirror
represented by “/” would change a beam traveling north to traveling east.
“Solving” the maze means letting the laser beam travel through the grid until it hits a wall, or
gets stuck in a loop. The “solution” is two parts. The first part is the number of squares
traversed. The second part is the coordinate of where the laser beam ends up after
traversing the entire maze. 


## How to Run

When in the project directory, on the command line, type "./maze input.txt output.txt"

Developed to run with Node v0.12.6.

## How to Test

When in the project directory, on the command line, type "mocha"


