import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "3592",
  database: "db_copa",
});

connection.connect();

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} values valores a serem passados para o sql
 * @param {string} rejectMesage menssagem a ser exibida
 * @returns objeto da Promisse
 */
export const query = (sql, values = "", rejectMesage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(rejectMesage);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
};

export default connection;
