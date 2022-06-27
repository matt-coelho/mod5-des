import Venda from "../Repositories/venda.repository.js"

async function create(venda) {
  return await Venda.create(venda)
}

async function read(venda) {
  return await Venda.read(venda)
}

async function update(venda) {
  return await Venda.update(venda)
}

async function remove(venda) {
  await Venda.remove(venda)
}

export default { create, read, update, remove }
