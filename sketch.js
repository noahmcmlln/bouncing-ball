var bouncingBalls = []; // give ourselves an empty array to hold all the balls

var numberOfBallsToStart = 100; // give ourselves a number of balls to start with

// give ourselves a basic function to pass as callbacks to forEach calls to the array

// initializeBall() calls initialize() on the ball passed in
var initializeBall = function (ball) {
  ball.initialize();
};

// updateAndDisplay() calls update() and display() on the ball passed in
var updateAndDisplay = function(ball) {
  ball.update();
  ball.display();
};


setup = function () {

  createCanvas(600, 600); // create a canvas

  // create however many balls we want...
  // create all the balls at the center of the canvas
  while (bouncingBalls.length < numberOfBallsToStart) bouncingBalls.push(new BouncingBall(width/2, height/2));
  // ...and initialize them
  bouncingBalls.forEach(initializeBall);

};

draw = function() {

  background(0); // refresh the background

  bouncingBalls.forEach(updateAndDisplay); // update and display each ball

};
