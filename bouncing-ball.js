/*
  BouncingBall

  The specs. A BouncingBall must:

  1. Be translucent.
  2. Have positions and directions represented by a p5.Vector object.
  3. Move in a random direction once initialize() is called, but each ball should move at the same speed.
  4. Bounce off the edges of the canvas.

  Most of your work in this assignment (in fact, almost certainly all of it) will involve modifying this starter code.

  You may create whatever additional properites and functions you may wish to help you accomplish the behavior above. Please recall that functions should generally be not longer than 5 lines of code.
*/

// the arguments to the constructor function should represent the BouncingBall's starting position
var BouncingBall = function (x, y) {
  this.position = new p5.Vector(x, y);
};

BouncingBall.prototype = {

  radius: 10,
  // initialize() is typically only called once, after the object is created.
  initialize: function () {
    this.direction= new p5.Vector(random(20, -20), random(20, -20));
    this.direction.setMag(5);
  },

  // update() should update the state of the object, moving it and updating any properties
  update: function () {
    this.position.add(this.direction);
    this.bounceCheck();
  },

  bounceCheck: function () {
    if (this.position.x > 600 - this.radius) this.horizontalBounce();
    if (this.position.x < this.radius) this.horizontalBounce();
    if (this.position.y > 600 - this.radius) this.verticalBounce();
    if (this.position.y < this.radius) this.verticalBounce();
  },

  horizontalBounce: function () {
    this.direction.x *= -1;
  },

  verticalBounce: function () {
    this.direction.y *= -1;
  },
  // display() should draw the object to the canvas, using p5 code


  display: function () {
    textSize(50);
    textAlign(CENTER);
    textStyle(ITALIC);
    fill(255);
    text("wow", 300, 300);

    fill(255, 0, 255, 75);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

};
