import Venda from "../Controllers/venda.controller.js"
import express from "express"
import { authorize } from "../Controllers/authenticator.controller.js"

const router = express.Router()

router.post("/", authorize("admin", "cliente"), Venda.create)
router.get("/:id", authorize("admin", "cliente"), Venda.read)
router.get("/", authorize("admin"), Venda.read)

export default router
