import Autor from "../Models/autor.model.js"

async function create(autor) {
  try {
    return await Autor.create(autor)
  } catch (err) {
    throw err
  }
}

async function read(autor) {
  try {
    return await Autor.findByPk(autor.autorId)
  } catch (err) {
    throw err
  }
}

async function update(autor) {
  try {
    await Autor.update(autor, { where: { autorId: autor.autorId } })
    return await read(autor)
  } catch (err) {
    throw err
  }
}

async function remove(autor) {
  try {
    await Autor.destroy({ where: { autorId: autor.autorId } })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
