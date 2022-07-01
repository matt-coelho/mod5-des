import { connect } from "../Database/postgreedb.js"

async function create(cliente) {
  const conn = await connect()
  try {
    const sql =
      "insert into clientes (nome, email, senha, telefone, endereco)values($1,$2,$3,$4,$5) returning *"
    const values = [
      cliente.nome,
      cliente.email,
      cliente.senha,
      cliente.telefone,
      cliente.endereco,
    ]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function read(cliente) {
  const conn = await connect()
  try {
    if (cliente.clienteid) {
      const sql = "select * from clientes where clienteid = $1"
      const values = [cliente.clienteid]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else if (cliente.email && cliente.senha) {
      const sql = "select * from clientes where email = $1 and senha = $2"
      const values = [cliente.email, cliente.senha]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else if (cliente.email && !cliente.senha) {
      const sql = "select clienteid from clientes where email = $1"
      const values = [cliente.email]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else {
      const sql =
        "select clienteid, nome, email, telefone, endereco from clientes order by clienteid"
      const res = await conn.query(sql)
      return res.rows
    }
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function update(cliente) {
  const conn = await connect()
  try {
    const sql =
      "update clientes set nome=$1, email=$2, telefone=$3, senha=$4, endereco=$5 where clienteid=$6 returning *"
    const values = [
      cliente.nome,
      cliente.email,
      cliente.telefone,
      cliente.senha,
      cliente.endereco,
      cliente.clienteid,
    ]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function remove(cliente) {
  const conn = await connect()
  try {
    const sql = "delete from clientes where clienteid = $1"
    const values = [cliente.clienteid]
    const res = await conn.query(sql, values)
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

export default { create, read, update, remove }
