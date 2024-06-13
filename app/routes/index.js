import { Router} from "express";
import rutaUsuario from "./routes.usuario.js";
import rutaProductos from "./routes.productos.js";


const ruta = Router();

ruta.use("/api", rutaUsuario);
ruta.use("/api", rutaProductos);


export default ruta;