import Cliente from "../Controllers/cliente.controller.js"
import express from "express"
import { authorize } from "../Controllers/authenticator.controller.js"

const router = express.Router()

router.post("/", authorize("admin"), Cliente.create)
router.put("/", authorize("admin", "cliente"), Cliente.update)
router.delete("/:id", authorize("admin"), Cliente.remove)
router.get("/:id", authorize("admin"), Cliente.read)
router.get("/", authorize("admin"), Cliente.read)

export default router
