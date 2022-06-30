import { ObjectId } from "mongodb"
import { getConn } from "../Database/mongodb.js"

async function create(informacao) {
  const conn = getConn()
  try {
    await conn.connect()
    await conn.db("livraria").collection("livroInfo").insertOne(informacao)
    return await read(informacao)
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

async function read(informacao) {
  const conn = getConn()
  try {
    await conn.connect()
    if (!informacao.livroid) {
      return await conn
        .db("livraria")
        .collection("livroInfo")
        .find({})
        .toArray()
    } else {
      return await conn
        .db("livraria")
        .collection("livroInfo")
        .find({ livroid: informacao.livroid })
        .toArray()
    }
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

async function update(informacao) {
  const conn = getConn()
  try {
    //const _id = informacao.informacaoId
    const livroid = informacao.livroid
    //delete informacao.informacaoId
    delete informacao.livroid
    await conn.connect()
    await conn
      .db("livraria")
      .collection("livroInfo")
      .updateOne({ livroid: livroid }, { $set: { ...informacao } })
    return await read(informacao)
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

async function remove(informacao) {
  const conn = getConn()
  try {
    await conn.connect()
    await conn
      .db("livraria")
      .collection("livroInfo")
      .deleteOne({ livroid: informacao.livroid })
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

export default { create, read, update, remove }
