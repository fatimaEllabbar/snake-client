// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === "u") {
      //conn.write("Move: up");
    connection.write("Move: up");
  }
  if(key === "d") {
    connection.write("Move: down");
  }
  if(key === "l") {
    connection.write("Move: left");
  }
  if(key === "r") {
    connection.write("Move: right");
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    handleUserInput(key);
  });

  return stdin;
}
module.exports = {
  setupInput,
  handleUserInput
}