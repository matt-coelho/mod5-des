import Cliente from "../Services/cliente.service.js"
import basicAuth from "express-basic-auth"
import dotenv from "dotenv"

dotenv.config()

const u = process.env.ADMIN_U
const s = process.env.ADMIN_S

function getRole(username) {
  if (username === u) {
    return "admin"
  }
  return "cliente"
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1

  return (req, res, next) => {
    if (req.auth.user) {
      const role = getRole(req.auth.user)
      if (isAllowed(role)) {
        next()
      } else {
        res.status(403).send("usuario sem permissao")
      }
    } else {
      res.status(403).send("usuario nao encontrado")
    }
  }
}

function authorizer(username, password, cb) {
  if (
    basicAuth.safeCompare(username, u) &&
    basicAuth.safeCompare(password, s)
  ) {
    return cb(null, true)
  }
  const cli = { email: username, senha: password }
  Cliente.read(cli)
    .then((value) => {
      return cb(null, value)
    })
    .catch(() => {
      return cb(null, false)
    })
}

export { getRole, authorize, authorizer }
