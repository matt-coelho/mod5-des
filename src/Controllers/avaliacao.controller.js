import Avaliacao from "../Services/avaliacao.service.js"

async function create(req, res, next) {
  try {
    const avaliacao = req.body
    avaliacao.livroid = parseInt(req.params.id)
    if (!avaliacao.nome || !avaliacao.nota || !avaliacao.avaliacao) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Avaliacao.create(avaliacao))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const avaliacao = { avaliacaoid: parseInt(req.params.id) }
    res.send(await Avaliacao.read(avaliacao))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const avaliacao = req.body
    if (
      !avaliacao.avaliacaoid ||
      !avaliacao.nome ||
      !avaliacao.nota ||
      !avaliacao.avaliacao
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Avaliacao.update(avaliacao))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const avaliacao = {
      avaliacaoid: parseInt(req.params.aid),
      livroid: parseInt(req.params.id),
    }
    res.end(await Avaliacao.remove(avaliacao))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
