let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // event listener
  stdin.on('data', handleUserInput);
  

  return stdin;
};

const handleUserInput = (key) => {
  // \u003 = ctrl + c
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w' || key === 'W') {
    // process.stdout.write('Move: up');
    connection.write('Move: up');
  }

  if (key === 'a' || key === 'A') {
    // process.stdout.write('Move: left');
    connection.write('Move: left');
  }

  if (key === 's' || key === 'S') {
    // process.stdout.write('Move: right');
    connection.write('Move: down');
  }

  if (key === 'd' || key === 'D') {
    // process.stdout.write('Move: down');
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: *Burp*');
  }

  if (key === '2') {
    connection.write('Say: Gobble Gobble');
  }

  if (key === '3') {
    connection.write('Say: Excuse me!');
  }

  if (key === '4') {
    connection.write("Say: We're low on food!");
  }
};

module.exports = {setupInput};