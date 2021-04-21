function FunctionAsConstructor (brand, price, isAvailable = true) {

}
const audi = new FunctionAsConstructor('audi', 300000, false);

console.log(audi)

class Car {
  brand;
  price;
  isAvailable;
  static carCount = 0;
  constructor(brand, price, isAvailable = true) {
    Car.carCount += 1;
    this.brand = brand
    this.price = price
    this.isAvailable = isAvailable
  }
}

const Car2 = (function () {
  let carCount = 0;
  function Car3 (brand, price, isAvailable) {
    carCount += 1;
    this.brand = brand
    this.price = price
    this.isAvailable = isAvailable
  }
  return Car3
})()

const car = new Car('volvo',143000)
console.log(car);
console.log(Car.carCount);
