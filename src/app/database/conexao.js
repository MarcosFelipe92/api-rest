import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "3592",
  database: "db_copa",
});

connection.connect();

export default connection;
