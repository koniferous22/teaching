function getThis() {
  return this;
}

console.log(getThis());
const obj = {
  x: 5,
  getThis
};

console.log(obj.getThis());
