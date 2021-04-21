const readFileOrReject = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, fileName), 'utf-8', function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data)
    }
  });
});

readFileOrReject('test.txt').then((contents) => {
  console.log(contents);
})

readFileOrReject('not-a-test.txt').then((contents) => {
  console.log(contents);
}).catch((e) => {
  console.log('Encountered error');
  console.error(e)
}).then(() => {
  throw new Error('Some unknown failure');
}).then(() => {
  console.log('After file was processed')
}).catch((e) => {
  console.log('Encountered second error');
  console.error(e)
})

const connectToDb3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      url: 'some-db-url'
    });
  }, 1500);
})

const loadUser3 = ({ url }) => new Promise((resolve, reject ) => {
  setTimeout(() => {
    resolve({
      username: 'asdf',
      password:'iasufgaowiufoaewuhf',
      email: 'some.email@email.exe'
    });
  }, 500);
})

connectToDb3()
  .then((connection) => loadUser3(connection))
  .catch((e) => {
    console.log('Encountered second error');
    console.error(e)
  })
