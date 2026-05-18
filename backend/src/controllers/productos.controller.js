import { pool } from "../db.js";

export const getAllproductos = async (req, res) => {
    const data = await pool.query("SELECT id_producto, descripcion, precio FROM public.productos;")
    //--console.log(data)
     res.json(data.rows)
 }

 export const getOneproductos = async (req, res) => {
    const id = req.params.id
    const data = await pool.query("SELECT id_producto, descripcion, precio FROM public.productos WHERE id_producto = $1;", [id])
    //--console.log(data)
     res.json(data.rows)
 }

 export const saveproducto = async (req, res) => {
    try {
        console.log(req.body)
        const { descripcion, precio } = req.body
    const respuesta = await pool.query("INSERT INTO public.productos (descripcion, precio) VALUES ($1, $2);",[descripcion, precio]
        )
        res.json({res:"PRODUCTO CREADO DE MANERA CORRECTA"})
    } catch (error) {
    console.log (error)
    res.json({res:"EL PRODUCTO NO HA SIDO CREADO"})     
   } 
   }

   export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, precio } = req.body;
        await pool.query("UPDATE public.productos SET descripcion = $1, precio = $2 WHERE id_producto = $3;", [descripcion, precio, id]);
        res.json({ res: "PRODUCTO ACTUALIZADO DE MANERA CORRECTA" });
    } catch (error) {
        console.log(error);
        res.json({ res: "EL PRODUCTO NO HA SIDO ACTUALIZADO" });
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM public.productos WHERE id_producto = $1;", [id]);
        res.json({ res: "PRODUCTO ELIMINADO DE MANERA CORRECTA" });
    } catch (error) {
        console.log(error);
        res.json({ res: "EL PRODUCTO NO HA SIDO ELIMINADO" });
    }
};
 
