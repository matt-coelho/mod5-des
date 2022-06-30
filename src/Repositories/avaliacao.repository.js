import { ObjectId } from "mongodb"
import { getConn } from "../Database/mongodb.js"
import informacao from "./informacao.repository.js"

async function create(avaliacao) {
  const conn = getConn()
  try {
    let info = await informacao.read(avaliacao)
    info = info[0]
    delete avaliacao.livroid
    info.avaliacoes.push(avaliacao)
    await informacao.update(info)
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

async function remove(avaliacao) {
  const conn = getConn()
  try {
    let info = await informacao.read(avaliacao)
    info = info[0]
    info.avaliacoes.splice(avaliacao.avaliacaoid, 1)
    await informacao.update(info)
  } catch (err) {
    throw err
  } finally {
    conn.close()
  }
}

export default { create, remove }
