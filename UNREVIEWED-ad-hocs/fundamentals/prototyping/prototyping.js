class Ellipse {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

const ellipse = new Ellipse(2,5);

console.log(ellipse);
console.log(`ellipse.__proto__`);
console.log(ellipse.__proto__);
console.log(`ellipse.__proto__.constructor`);
console.log(ellipse.__proto__.constructor);
console.log('typeof ellipse.__proto__.constructor');
console.log(typeof ellipse.__proto__.constructor);

const Ellipse2 = (function () {
  function Ellipse2(x,y) {
    this.x = x;
    this.y = y;
  }
  Ellipse2.prototype.cloneEllipse = function () {
    new Ellipse2(this.x, this.y);
  }
  return Ellipse2;
})()

const ellipse2 = new Ellipse2(3,6);

// console.log(ellipse2);
class Circle extends Ellipse {
  static instanceCount = 0
  constructor(radius) {
    super(radius, radius)
    Circle.instanceCount += 1
  } 
}

const Circle2 = (function (_super) {
  function Circle2(x) {
  }
  Circle2.prototype.cloneEllipse = function () {
    new Circle2(this.x);
  }
  return Circle2;
})(Ellipse2)
