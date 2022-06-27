import Cliente from "../Repositories/cliente.repository.js"

async function create(cliente) {
  return await Cliente.create(cliente)
}

async function read(cliente) {
  return await Cliente.read(cliente)
}

async function update(cliente) {
  return await Cliente.update(cliente)
}

async function remove(cliente) {
  await Cliente.remove(cliente)
}

export default { create, read, update, remove }
