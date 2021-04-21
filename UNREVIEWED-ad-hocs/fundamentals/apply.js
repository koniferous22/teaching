function Constructor(name, title) {
  this.name = name;
  this.title = title;
  return this;
}

console.log(Constructor.apply({ size: 520}, ['title', 'name']))

class Animal {
  constructor(species, hasSharpTeeth, location) {
    this.species = species;
    this.hasSharpTeeth = hasSharpTeeth;
    this.location = location;
  }
}

const animal = new Animal('tiger', true, 'india');
console.log(animal)

class Dog extends Animal {
  constructor(species, hasSharpTeeth, location, owner) {
    super(species, hasSharpTeeth, location);
    this.owner = owner;
  }
}

const dog = new Dog('labrador', true, 'Brno', 'Petr');
console.log(dog)

