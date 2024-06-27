import express from "express";
import { engine } from "express-handlebars";
import { server } from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";



const app = express();
const PUERTO = 8080;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(espress.static("./src/public"));

//plantillasBigote
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


//rutas
app.use("/api/produts", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);


const httpServer = app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});


import ProductManager from "../controllers/product-manager.js";
const ProductManager = new ProductManager("./src/models/productos.json");
