import Livro from "../Controllers/livro.controller.js"
import Informacao from "../Controllers/informacao.controller.js"
import Avaliacao from "../Controllers/avaliacao.controller.js"
import express from "express"

const router = express.Router()

router.post("/", Livro.create)
router.put("/", Livro.update)
router.delete("/:id", Livro.remove)
router.get("/:id", Livro.read)
router.get("/", Livro.read)

router.post("/info", Informacao.create)
router.put("/info", Informacao.update)
router.delete("/info/:id", Informacao.remove)

router.post("/:id/avaliacao", Avaliacao.create)
router.delete("/:id/avaliacao/:aid", Avaliacao.remove)

export default router
