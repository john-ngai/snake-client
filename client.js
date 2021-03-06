const net = require('net'); // import Node's net library
const {IP, PORT} = require('./constants');

// establish a connection with the game server
const connect = () => {
  console.log('Connecting...\n')

  // the con represents your connection to the server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf8'); // interpret incoming data as text

  conn.on('connect', () => {
    console.log(Date(), '\nSuccessfully connected to the server!\n');
    conn.write('Name: JMN');
  });

  conn.on('data', (data) => {
    console.log(`Server Message: ${data}`);
  });

  conn.on('end', () => {
    console.log(Date(), '\nDisconnected from the server...')
  })

  return conn;
};

module.exports = {connect};