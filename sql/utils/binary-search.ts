const sortImmutable = (inputArr: Array<{id: number}>) => [...inputArr].sort((a,b) => a.id - b.id);

const unsortedArray = [
  { id: 42, val: 'asdf1'},
  { id: 3,  val: 'asdf2'},
  { id: 14, val: 'asdf3'},
  { id: 1,  val: 'asdf4'},
  { id: 89, val: 'asdf5'},
  { id: 10, val: 'asdf6'},
  { id: 65, val: 'asdf7'},
  { id: 73, val: 'asdf8'},
  { id: 25, val: 'asdf9'},
  { id: 94, val: 'asdf0'},
  { id: 40, val: 'asdf1'},
  { id: 33, val: 'asdf2'},
  { id: 22, val: 'asdf3'},
  { id: 75, val: 'asdf4'},
  { id: 7,  val: 'asdf5'},
  { id: 10, val: 'asdf6'}
]

// Test whether that works - immutable output goes 1st, so side effect will be detected
console.log(sortImmutable(unsortedArray));
console.log(unsortedArray);

// Version 1 - linear O(n)
const findElementById1 = (inputArr: Array<{id: number}>, id: number) => {
  let iterations = 0;
  for (const element of inputArr) {
    iterations++;
    if (element.id === id) {
      console.log(`Found element in ${iterations} iterations`)
      return element;
    }
  }
}

// Version 2 - logarithmic O(log(n))
const findElementById2 = (inputArr: Array<{id: number}>, id: number) => {
  let iterations = 0;
  let maxIndex = inputArr.length;
  let minIndex = 0;
  // NOTE initially write as someStopCriterium
  while (minIndex <= maxIndex) {
    iterations++;
    const middleIndex = Math.floor((minIndex + maxIndex) / 2);
    if (id < inputArr[middleIndex].id) {
      maxIndex = middleIndex - 1;
    }
    else if (id > inputArr[middleIndex].id) {
      minIndex = middleIndex + 1;
    }
    else {
      console.log(`Found element in ${iterations} iterations`)
      return inputArr[middleIndex];
    }
  }
}

const existingId = 7;
const nonExistingId = 26;

const sortedArray = sortImmutable(unsortedArray);

console.log(findElementById1(unsortedArray, existingId));
console.log(findElementById1(unsortedArray, nonExistingId));
console.log(findElementById2(sortedArray, existingId));
console.log(findElementById2(sortedArray, nonExistingId));