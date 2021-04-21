function createCar1(brand, price, isAvailable) {
  return {
    brand, // READ-ONLY
    price, // READ-WRITE
    isAvailable // READ-WRITE
  }
}
const car =  {
  brand: 'volvo',
  price: 100000,
  secretInformation: 'It\'s a scam'
};
car.secretInformation = 'It\'s not a scam'
const si = car.secretInformation;
// console.log(si);
function createCar2(brand, price, isAvailable) {
  var _brand = brand;
  function getBrand () {
    return _brand
  }
  return {
    getBrand, // READ-ONLY
    price, // READ-WRITE
    isAvailable // READ-WRITE
  }
}
const car2 = createCar2('skoda', 150000, true);
car2.price = 1250000; // VALID
// car2.brand = 'audi';  // INVALID
var _brand = 'audi'
console.log(car2.getBrand())
setTimeout(function () {
  console.log('timeout');
}, 3000)
const exampleFunction = () => {
  console.log('timeout');
}
// Immediately invoked function
(function () {
  console.log('Immediatellly invoked');
})();
