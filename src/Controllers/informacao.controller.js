import Informacao from "../Services/informacao.service.js"

async function create(req, res, next) {
  try {
    const informacao = req.body
    if (
      !informacao.livroid ||
      !informacao.descricao ||
      !informacao.paginas ||
      !informacao.editora
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Informacao.create(informacao))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const informacao = { livroid: parseInt(req.params.id) }
    res.send(await Informacao.read(informacao))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const informacao = req.body
    if (
      !informacao.livroid ||
      !informacao.descricao ||
      !informacao.paginas ||
      !informacao.editora
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Informacao.update(informacao))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const informacao = { livroid: parseInt(req.params.id) }
    res.end(await Informacao.remove(informacao))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
