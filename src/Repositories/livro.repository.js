import { connect } from "../Database/postgreedb.js"

async function create(livro) {
  const conn = await connect()
  try {
    const sql =
      "insert into livros (nome, valor, estoque, autorid)values($1,$2,$3,$4) returning *"
    const values = [livro.nome, livro.valor, livro.estoque, livro.autorid]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function read(livro) {
  const conn = await connect()
  try {
    if (livro.autorid) {
      const sql = "select * from livros where autorid = $1 order by livroid"
      const values = [livro.autorid]
      const res = await conn.query(sql, values)
      return res.rows
    } else if (livro.livroid) {
      const sql = "select * from livros where livroid = $1"
      const values = [livro.livroid]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else {
      const sql = "select * from livros order by livroid"
      const res = await conn.query(sql)
      return res.rows
    }
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function update(livro) {
  const conn = await connect()
  try {
    const sql =
      "update livros set valor=$1, estoque=$2 where livroid=$3 returning *"
    const values = [livro.valor, livro.estoque, livro.livroid]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function remove(livro) {
  const conn = await connect()
  try {
    const sql = "delete from livros where livroid = $1"
    const values = [livro.livroid]
    const res = await conn.query(sql, values)
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

export default { create, read, update, remove }
