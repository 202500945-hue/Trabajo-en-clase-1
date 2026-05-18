import { Router } from "express"
import { getUsuarios, saveUsuario, updateUsuario, deleteUsuario } from "../controllers/usuarios.controller.js"

const router = Router()

// Rutas para gestionar el CRUD de usuarios
router.get("/usuarios/getall", getUsuarios)
router.post("/usuarios/save", saveUsuario)
router.put("/usuarios/update/:id", updateUsuario)
router.delete("/usuarios/delete/:id", deleteUsuario)

export default router