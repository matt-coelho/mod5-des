import Venda from "../Controllers/venda.controller.js"
import express from "express"

const router = express.Router()

router.post("/", Venda.create)
router.get("/:id", Venda.read)
router.get("/", Venda.read)

export default router
