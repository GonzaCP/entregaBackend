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



// const product = new ProductManager("../files/products.json")


//  let agregandoProductos = async () => {
//     await product.creoArchivo()
//     // await product.addProduct("RHCP", "Funky style", 599, "Url1: ", "RHCP45", 1000)
//     // await product.addProduct("Pink Floyd", "Acid barret", 799, "Url2: ", "PINK68", 2000)
//     // await product.addProduct("Greta Van Fleet", "Zepellin's style", 499, "Url3: ", "GRETA46", 500)
    
//     //console.log(await product.getProducts())
    
//     //console.log(await product.getProductsById(1))

// //     //await product.updateProduct(1, "La Renga")



// }
// agregandoProductos()


//muestro todos los productos
// app.get('/products', async(req, res) => {
//     //await res.send("Holaaaa")
//     await res.send("hi")

// })


// app.get('/products/:pid',(req, res) => {
//    // hago búsqueda x ID
//     const productsFind = products.find(p => p.id === req.params.pid)

//     if (productsFind) {
//        res.send(productsFind)
//     }

//     res.send({ message: 'ID no encontrado!' })     

// })
 







app.listen(PORT, () => {
    console.log(`Te escucho por el puerto ${PORT}`)
}) 
