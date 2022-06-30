import { connect } from "../Database/postgreedb.js"

async function create(venda) {
  const conn = await connect()
  try {
    const sql =
      "insert into vendas (valor, momento, clienteid, livroid) values($1,$2,$3,$4) returning *"
    const values = [venda.valor, venda.momento, venda.clienteid, venda.livroid]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function read(venda) {
  const conn = await connect()
  try {
    if (venda.livroid) {
      const sql = "select * from vendas where livroid = $1 order by vendaid"
      const values = [venda.livroid]
      const res = await conn.query(sql, values)
      return res.rows
    } else if (venda.clienteid) {
      const sql = "select * from vendas where clienteid = $1 order by vendaid"
      const values = [venda.clienteid]
      const res = await conn.query(sql, values)
      return res.rows
    } else if (venda.autorid) {
      const sql =
        "select * from vendas v inner join livros l on v.livroid = l.livroid where l.autorid = $1 order by vendaid"
      const values = [venda.autorid]
      const res = await conn.query(sql, values)
      return res.rows
    } else if (venda.vendaid) {
      const sql = "select * from vendas where vendaid = $1"
      const values = [venda.vendaid]
      const res = await conn.query(sql, values)
      return res.rows[0]
    } else {
      const sql = "select * from vendas order by vendaid"
      const res = await conn.query(sql)
      return res.rows
    }
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function update(venda) {
  const conn = await connect()
  try {
    const sql =
      "update venda set valor=$1, momento=$2, livroid=$3 where vendaid=$4 returning *"
    const values = [venda.valor, venda.momento, venda.livroid, venda.vendaid]
    const res = await conn.query(sql, values)
    return res.rows[0]
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

async function remove(venda) {
  const conn = await connect()
  try {
    const sql = "delete from venda where vendaid = $1"
    const values = [venda.vendaid]
    const res = await conn.query(sql, values)
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
}

export default { create, read, update, remove }
