import { connect } from "../Database/postgreedb.js"

async function create(autor) {
  const conn = await connect()
  try {
    const sql =
      "insert into autores (nome, email, telefone)values($1,$2,$3) returning *"
    const values = [autor.nome, autor.email, autor.telefone]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function read(autor) {
  const conn = await connect()
  try {
    if (autor.autorid) {
      const sql = "select * from autores where autorid = $1"
      const values = [autor.autorid]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else {
      const sql = "select * from autores order by autorid"
      const res = await conn.query(sql)
      return res.rows
    }
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function update(autor) {
  const conn = await connect()
  try {
    const sql =
      "update autores set nome=$1, email=$2, telefone=$3 where autorid=$4 returning *"
    const values = [autor.nome, autor.email, autor.telefone, autor.autorid]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function remove(autor) {
  const conn = await connect()
  try {
    const sql = "delete from autores where autorid = $1"
    const values = [autor.autorid]
    const res = await conn.query(sql, values)
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

export default { create, read, update, remove }
