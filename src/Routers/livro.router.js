import Livro from "../Controllers/livro.controller.js"
import Informacao from "../Controllers/informacao.controller.js"
import Avaliacao from "../Controllers/avaliacao.controller.js"
import express from "express"
import { authorize } from "../Controllers/authenticator.controller.js"

const router = express.Router()

router.post("/", authorize("admin"), Livro.create)
router.put("/", authorize("admin"), Livro.update)
router.delete("/:id", authorize("admin"), Livro.remove)
router.get("/:id", authorize("admin", "cliente"), Livro.read)
router.get("/", authorize("admin", "cliente"), Livro.read)

router.post("/info", authorize("admin"), Informacao.create)
router.put("/info", authorize("admin"), Informacao.update)
router.delete("/info/:id", authorize("admin"), Informacao.remove)

router.post("/:id/avaliacao", authorize("admin", "cliente"), Avaliacao.create)
router.delete("/:id/avaliacao/:aid", authorize("admin"), Avaliacao.remove)

export default router
