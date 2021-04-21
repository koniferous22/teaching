const fn = 'test.txt';
const fn2 = 'not-a-test.txt';

function processFile(fileName) {
  fs.readFile(path.join(__dirname, fileName), 'utf-8', function (err, data) {
    if (err) {
      console.error(`some error reading file: ${err}`);
    } else {
      console.log(data)
    }
  });
}

processFile(fn)
processFile(fn2);
