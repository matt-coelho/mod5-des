import Livro from "../Repositories/livro.repository.js"

async function create(livro) {
  return await Livro.create(livro)
}

async function read(livro) {
  return await Livro.read(livro)
}

async function update(livro) {
  return await Livro.update(livro)
}

async function remove(livro) {
  await Livro.remove(livro)
}

export default { create, read, update, remove }
