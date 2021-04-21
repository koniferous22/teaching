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

// 
