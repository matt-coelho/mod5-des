import Autor from "../Repositories/autor.repository.js"

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
  await Autor.remove(autor)
}

export default { create, read, update, remove }
