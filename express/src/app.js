import express, { request, response } from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"
import usuariosRouter from "./routes/usuarios.router.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.send("We're in!")
})


//Routers
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)
app.use("/api/user", usuariosRouter);





app.listen(PORT, () => {
    console.log(`Te escucho por el puerto ${PORT}`)
}) 
