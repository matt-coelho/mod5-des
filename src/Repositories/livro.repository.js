import Livro from "../Models/livro.model.js"

async function create(livro) {
  try {
    return await Livro.create(livro)
  } catch (err) {
    throw err
  }
}

async function read(livro) {
  try {
    return await Livro.findByPk(livro.livroId)
  } catch (err) {
    throw err
  }
}

async function update(livro) {
  try {
    await Livro.update(livro, { where: { livroId: livro.livroId } })
    return await read(livro)
  } catch (err) {
    throw err
  }
}

async function remove(livro) {
  try {
    await Livro.destroy({ where: { livroId: livro.livroId } })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
