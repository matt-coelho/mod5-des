import Autor from "../Repositories/autor.repository.js"
import Livro from "../Repositories/livro.repository.js"

async function create(autor) {
  return await Autor.create(autor)
}

async function read(autor) {
  return await Autor.read(autor)
}

async function update(autor) {
  return await Autor.update(autor)
}

async function remove(autor) {
  let livro = await Livro.read(autor)
  if (livro.length > 0) {
    throw new Error(
      "Autor nao pode ser removidor por possuir livros cadastrados."
    )
  }
  await Autor.remove(autor)
}

export default { create, read, update, remove }
