const connectToDb2 = (cb) => {
  setTimeout(() => {
    console.log('Connected to db');
    cb(null, {
      databaseName: 'my-awesome-db',
      userTableName: 'users'
    });
  },1500);
}
const loadUser2 = (connection, cb) => {
  setTimeout(() => {
    const username = 'asdf';
    console.log(`Found user '${username}' in table "${connection.userTableName}"`);
    cb(null, {
      username
    })
  }, 3500);
}
connectToDb2((err, connection) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`connected to db, with connection ${JSON.stringify(connection)}`);
    loadUser2(connection, (err2, user) => {
      if (err2) {
      } else {
        console.log(`FOund user: ${JSON.stringify(user)}`)
      }
    });
  }
})
