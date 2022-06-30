import Cliente from "../Controllers/cliente.controller.js"
import express from "express"

const router = express.Router()

router.post("/", Cliente.create)
router.put("/", Cliente.update)
router.delete("/:id", Cliente.remove)
router.get("/:id", Cliente.read)
router.get("/", Cliente.read)

export default router
