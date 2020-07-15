var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user:"uhy3owhk286o1j2e",
  password:"xw5vbohn7ilmysb9",
  database:"dl26l7exd7c7kb2h"
});
conn.connect();
module.exports = conn;
