const net = require('net'); // import Node's net library

// establish a connection with the game server
const connect = () => {
  console.log('Connecting...\n')

  // the con represents your connection to the server
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address
    port: 50541,
  }, () => {
    console.log(Date(), '\nSuccessfully connected to the server!\n');
  });

  conn.setEncoding('utf8'); // interpret incoming data as text

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('end', () => {
    console.log(Date(), '\nDisconnected from the server...')
  })

  return conn;
}

module.exports = {connect};