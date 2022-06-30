import Venda from "../Services/venda.service.js"

async function create(req, res, next) {
  try {
    const venda = req.body
    if (!venda.clienteid || !venda.livroid) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Venda.create(venda))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const venda = {}
    if (req.params.id) {
      venda.vendaid = parseInt(req.params.id)
    }
    if (req.query.clienteid) {
      venda.clienteid = parseInt(req.query.clienteid)
    }
    if (req.query.autorid) {
      venda.autorid = parseInt(req.query.autorid)
    }
    if (req.query.livroid) {
      venda.livroid = parseInt(req.query.livroid)
    }
    res.send(await Venda.read(venda))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const venda = req.body
    if (!venda.vendaid || !venda.valor || !venda.livroid) {
      throw new Error("Campos obrigatorios nao informados")
    }
    venda.momento = new Date()
    res.send(await Venda.update(venda))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const venda = { vendaid: parseInt(req.params.id) }
    res.end(await Venda.remove(venda))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
