const main = async () => {
  const connection = await connectToDbPromise('connectionString')
  console.log(connection);
};

const resultOfMain = main();
console.log(typeof resultOfMain);
