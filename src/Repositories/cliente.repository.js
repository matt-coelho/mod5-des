import Cliente from "../Models/cliente.model.js"

async function create(cliente) {
  try {
    return await Cliente.create(cliente)
  } catch (err) {
    throw err
  }
}

async function read(cliente) {
  try {
    return await Cliente.findByPk(cliente.clienteId)
  } catch (err) {
    throw err
  }
}

async function update(cliente) {
  try {
    await Cliente.update(cliente, { where: { clienteId: cliente.clienteId } })
    return await read(cliente)
  } catch (err) {
    throw err
  }
}

async function remove(cliente) {
  try {
    await Cliente.destroy({ where: { clienteId: cliente.clienteId } })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
