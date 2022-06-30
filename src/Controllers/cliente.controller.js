import Cliente from "../Services/cliente.service.js"

async function create(req, res, next) {
  try {
    const cliente = req.body
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Cliente.create(cliente))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  try {
    const cliente = { clienteid: parseInt(req.params.id) }
    res.send(await Cliente.read(cliente))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const cliente = req.body
    if (
      !cliente.clienteid ||
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await Cliente.update(cliente))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const cliente = { clienteid: parseInt(req.params.id) }
    res.end(await Cliente.remove(cliente))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
