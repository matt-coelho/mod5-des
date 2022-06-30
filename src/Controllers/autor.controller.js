import Autor from "../Services/autor.service.js"

async function create(req, res, next) {
  try {
    const autor = req.body
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Campos obrigatorios ausentes")
    }
    res.send(await Autor.create(autor))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const autor = {}
    if (req.params.id) {
      autor.autorid = parseInt(req.params.id)
    }
    res.send(await Autor.read(autor))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const autor = req.body
    if (!autor.autorid || !autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Autor.update(autor))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const autor = { autorid: parseInt(req.params.id) }
    res.end(await Autor.remove(autor))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
