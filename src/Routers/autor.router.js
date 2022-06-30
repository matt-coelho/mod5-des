import Autor from "../Controllers/autor.controller.js"
import express from "express"

const router = express.Router()

router.post("/", Autor.create)
router.get("/:id", Autor.read)
router.get("/", Autor.read)
router.put("/", Autor.update)
router.delete("/:id", Autor.remove)

export default router
