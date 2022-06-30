import Livro from "../Repositories/livro.repository.js"
import Informacao from "../Services/informacao.service.js"

async function create(livro) {
  return await Livro.create(livro)
}

async function read(livro) {
  const _livro = await Livro.read(livro)
  if (livro.livroid) {
    const info = await Informacao.read(livro)
    _livro.info = info[0]
  }
  return _livro
}

async function update(livro) {
  delete livro.nome
  delete livro.autorid
  //nome do livro e autor nao devem ser alterados
  return await Livro.update(livro)
}

async function remove(livro) {
  await Livro.remove(livro)
}

export default { create, read, update, remove }
