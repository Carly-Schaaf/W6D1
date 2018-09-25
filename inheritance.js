// Function.prototype.inherits = function(parentProto) {
//   function Surrogate () {};
//   Surrogate.prototype = parentProto.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }
//
// function MovingObject () {}
// MovingObject.prototype.moves = function() {
//   console.log("I'm moving");
// }
//
// function Ship () {}
// Ship.inherits(MovingObject);
//
// Ship.prototype.sails = function() {
//   console.log("I'm sailing");
// }
//
// function Asteroid () {}
// Asteroid.inherits(MovingObject);
// Asteroid.prototype.floats = function() {
//   console.log("I'm floating");
// }
//

// -----------------with Object.create--------------------

Function.prototype.inheritCreate = function(parentProto) {
  this.prototype = Object.create(parentProto.prototype)
  this.prototype.constructor = this;
}


function MovingObject () {}
MovingObject.prototype.moves = function() {
  console.log("I'm moving");
}

function Ship () {}
Ship.inheritCreate(MovingObject);

Ship.prototype.sails = function() {
  console.log("I'm sailing");
}

function Asteroid () {}
Asteroid.inheritCreate(MovingObject);
Asteroid.prototype.floats = function() {
  console.log("I'm floating");
}
const s = new Ship
const a = new Asteroid


s.sails()
// a.sails() --> doesn't work
a.floats()
s.moves()
a.moves()
console.log(MovingObject.prototype)
