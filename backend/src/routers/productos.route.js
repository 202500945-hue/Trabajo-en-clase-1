import { Router } from "express"
import { getAllproductos, getOneproductos, saveproducto, updateProducto, deleteProducto } from "../controllers/productos.controller.js"

const router = Router()

// Tener las rutas necesarias para generar nuestro CRUD

router.get ("/productos/getall", getAllproductos)
router.get ("/productos/getone/:id", getOneproductos)
router.post ("/productos/save", saveproducto)
router.put("/productos/update/:id", updateProducto)
router.delete("/productos/delete/:id", deleteProducto)
export default router 
