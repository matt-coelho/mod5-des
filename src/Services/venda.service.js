import Venda from "../Repositories/venda.repository.js"
import Livro from "../Services/livro.service.js"

async function create(venda) {
  let _livro = { livroid: venda.livroid }
  venda.momento = new Date()
  const livro = await Livro.read(_livro)
  venda.valor = livro.valor
  if (livro.estoque == 0) {
    throw new Error("Venda não pode ser realizada, sem estoque.")
  }
  livro.estoque -= 1
  delete livro.info
  await Livro.update(livro)
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
