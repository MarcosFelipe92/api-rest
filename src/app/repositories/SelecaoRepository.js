import { query } from "../database/conexao.js";

class SelecaoRepository {
  findAll() {
    const sql = "SELECT * FROM tb_selecoes;";
    return query(sql, "Erro ao buscar seleções!");
  }
  findById(id) {
    const sql = "SELECT * FROM tb_selecoes WHERE id = ?;";
    return query(sql, id, "Erro ao buscar seleção!");
  }
  create(selecao) {
    const sql = "INSERT INTO tb_selecoes SET ?;";
    return query(sql, selecao, "Erro ao cadastrar seleção!");
  }
  update(id, selecao) {
    const sql = "UPDATE tb_selecoes SET ? WHERE id = ?;";
    return query(sql, [selecao, id], "Erro ao alrerar seleção!");
  }
  delete(id) {
    const sql = "DELETE FROM tb_selecoes WHERE id = ?;";
    return query(sql, id, "Erro ao excluir seleção!");
  }
}

export default new SelecaoRepository();
