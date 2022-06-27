import Informacao from "../Repositories/informacao.repository.js"

async function create(informacao) {
  return await Informacao.create(informacao)
}

async function read(informacao) {
  return await Informacao.read(informacao)
}

async function update(informacao) {
  return await Informacao.update(informacao)
}

async function remove(informacao) {
  await Informacao.remove(informacao)
}

export default { create, read, update, remove }
