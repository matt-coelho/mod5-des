import Livro from "../Services/livro.service.js"

async function create(req, res, next) {
  try {
    const livro = req.body
    if (!livro.nome || !livro.valor || livro.estoque < 0 || !livro.autorid) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Livro.create(livro))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const livro = {}
    if (req.params.id) {
      livro.livroid = parseInt(req.params.id)
    }
    if (req.query.autorid) {
      livro.autorid = parseInt(req.query.autorid)
    }
    if (req.query.livroid) {
      livro.livroid = parseInt(req.query.livroid)
    }
    res.send(await Livro.read(livro))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const livro = req.body
    if (!livro.livroid || !livro.valor || !livro.estoque) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Livro.update(livro))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const livro = { livroid: parseInt(req.params.id) }
    res.end(await Livro.remove(livro))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
