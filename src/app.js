import express from "express"
import cors from "cors"
import AutorRoute from "./Routers/autor.router.js"
import ClienteRoute from "./Routers/cliente.router.js"
import LivroRoute from "./Routers/livro.router.js"
import VendaRoute from "./Routers/venda.router.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/autor", AutorRoute)
app.use("/cliente", ClienteRoute)
app.use("/livro", LivroRoute)
app.use("/venda", VendaRoute)

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message })
})

export default app
