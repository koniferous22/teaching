function Person(age) {
  this.age = age;
  // let _this = this;
  this.growOld = function () {
    this.age++;
  }
}

var person = new Person(1);
// NOTE will be called with wrong this value
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000);

// NOTE after this PoC .apply definition should follow
