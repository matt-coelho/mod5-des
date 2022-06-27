import Avaliacao from "../Repositories/avaliacao.repository.js"

async function create(avaliacao) {
  return await Avaliacao.create(avaliacao)
}

async function read(avaliacao) {
  return await Avaliacao.read(avaliacao)
}

async function update(avaliacao) {
  return await Avaliacao.update(avaliacao)
}

async function remove(avaliacao) {
  await Avaliacao.remove(avaliacao)
}

export default { create, read, update, remove }
