const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.addListener("close", () => {
    console.log("you ded cuz you idled");
  })
  return conn;
}
module.exports = {
  connect
}
