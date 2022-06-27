import Venda from "../Models/venda.model.js"

async function create(venda) {
  try {
    return await Venda.create(venda)
  } catch (err) {
    throw err
  }
}

async function read(venda) {
  try {
    return await Venda.findByPk(venda.vendaId)
  } catch (err) {
    throw err
  }
}

async function update(venda) {
  try {
    await Venda.update(venda, { where: { vendaId: venda.vendaId } })
    return await read(venda)
  } catch (err) {
    throw err
  }
}

async function remove(venda) {
  try {
    await Venda.destroy({ where: { vendaId: venda.vendaId } })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
