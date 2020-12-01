const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: FAT");
    conn.write("Say: HELLO");
    
  });

  conn.addListener("close", () => {
    console.log("you ded cuz you idled");
  });
  return conn;
}
module.exports = {
  connect
}
