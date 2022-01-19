const {connect} = require('./client');

connect();

// setup interface to handle user input from stdin
const setupInput = () => {
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
};

setupInput();