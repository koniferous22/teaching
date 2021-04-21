// ! PART 1

function generateNNumbers1 (n, startingValue) {
  const result = [];
  for (let currentNumber = startingValue; currentNumber < startingValue + n; currentNumber++) {
    result.push(currentNumber);
  }
  return result;
}
// generateNNumbers1(5,3);

function* generateNNumbers2 (n, startingValue) {
  // let currentNumber = startingValue;
  for (let currentNumber = startingValue; currentNumber < startingValue + n; currentNumber++) {
    console.log('Before yield')
    yield currentNumber;
    console.log('After yield');
  }
}

let iterator = generateNNumbers2(3, 5);
let result = null;

do {
  result = iterator.next();
  console.log(result);
  console.log('---');
} while(!result.done);

// ! PART 2

const executeGenerator = (generator, ...args) => {
  let iterator = generator(...args);
  let result = null;
  try {
    do {
      result = iterator.next();
      console.log(result);
      console.log('---');
    } while(!result.done);
  } catch (e) {
    console.log('Generator resulted in following exception');
    console.error(e.message)
  }
} 

function * generatorWithError() {
  yield 1;
  throw new Error('error');
  yield 2;
};

executeGenerator(generateNNumbers2, 3, 5)
executeGenerator(generatorWithError);

// ! PART 3
function * externallyControlledGenerator() {
  const x = yield 1;
  console.log(x);
  const y = yield 2;
  yield y;
}

iterator = externallyControlledGenerator();
console.log(iterator.next());
console.log(iterator.next('valueOfX'));
console.log(iterator.next('valueOfY'));
console.log(iterator.next());

// ! PART 4
function * externallyControlledGenerator2() {
  const x = yield 1;
  console.log(x);
  try {
    const y = yield 2;
    yield y;
  } catch (e) {
    console.error(e.message)
    yield `Encountered error: ${e.message}`;
  }
}
iterator = externallyControlledGenerator2();
console.log(iterator.next());
console.log(iterator.next('valueOfX'));
console.log(iterator.throw(new Error('example error')));

// ! PART 5

async function main2() {
  try {
    const connection = await getConnect('http://url');
  } catch (e) {
    console.error('Unable to connect to database');
  }
  const tables = await getTables(connection, 'MyDatabase');
  const usersSample = await getUsers(tables, 5);
}

function * main2() {
  try {
    const connection = yield getConnect('http://url');
  } catch (e) {
    console.error('Unable to connect to database');
  }
  const tables = yield getTables(connection, 'MyDatabase');
  const usersSample = yield getUsers(tables, 5);
}

function awaiter(asyncGenerator) {
}