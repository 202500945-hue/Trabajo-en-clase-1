import express from "express" 
import { PORT } from "./config.js"
import productosRoutes from "./routers/productos.route.js"
import morgan from "morgan"

const app = express ()

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productosRoutes)

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT)
})