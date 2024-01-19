import connection from "../database/conexao.js";

class SelecaoRepository {
  findAll() {
    const sql = "SELECT * FROM tb_selecoes;";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject(error);

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  findById(id) {
    const sql = "SELECT * FROM tb_selecoes WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject(error);

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  create(selecao) {
    const sql = "INSERT INTO tb_selecoes SET ?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, selecao, (error, result) => {
        if (error) return reject(error);

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  update(id, body) {
    const sql = "UPDATE tb_selecoes SET ? WHERE id = ?;";
    const selecao = body;
    return new Promise((resolve, reject) => {
      connection.query(sql, [selecao, id], (error, result) => {
        if (error) return reject(error);

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  delete(id) {
    const sql = "DELETE FROM tb_selecoes WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject(error);

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepository();
