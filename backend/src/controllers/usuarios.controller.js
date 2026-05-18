import { pool } from "../db.js";

// 1. Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    try {
        const respuesta = await pool.query("SELECT id_usuario, nombre, correo FROM public.usuarios;");
        res.json(respuesta.rows);
    } catch (error) {
        res.json({ res: "ERROR AL OBTENER USUARIOS" });
    }
};

// 2. Guardar un usuario nuevo
export const saveUsuario = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        await pool.query("INSERT INTO public.usuarios (nombre, correo, password) VALUES ($1, $2, $3);", [nombre, correo, password]);
        res.json({ res: "USUARIO CREADO DE MANERA CORRECTA" });
    } catch (error) {
        console.log(error);
        res.json({ res: "EL USUARIO NO HA SIDO CREADO" });
    }
};

// 3. Actualizar un usuario existente
export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, password } = req.body;
        await pool.query("UPDATE public.usuarios SET nombre = $1, correo = $2, password = $3 WHERE id_usuario = $4;", [nombre, correo, password, id]);
        res.json({ res: "USUARIO ACTUALIZADO DE MANERA CORRECTA" });
    } catch (error) {
        console.log(error);
        res.json({ res: "EL USUARIO NO HA SIDO ACTUALIZADO" });
    }
};

// 4. Eliminar un usuario
export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM public.usuarios WHERE id_usuario = $1;", [id]);
        res.json({ res: "USUARIO ELIMINADO DE MANERA CORRECTA" });
    } catch (error) {
        console.log(error);
        res.json({ res: "EL USUARIO NO HA SIDO ELIMINADO" });
    }
};