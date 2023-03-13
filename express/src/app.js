import express, { request, response } from "express"
// import ProductManager from "./ProductManager"

// const product = new ProductManager();
// product.getProducts


const app = express()
const PORT = 8060
//const productsJSON = require('./products.json')

const productos = [
    { title: "RHCP", description: "Funky style", price: "599", thumbnail: "Url1: ", code: "RHCP45", stock: "1000", id: "0" },
    { title: "Pink Floyd", description: "Acid Barret", price: "699", thumbnail: "Url2: ", code: "PINK68", stock: "2000", id: "1" },
    { title: "Divididos", description: "Aplanadora del rock", price: "799", thumbnail: "Url3: ", code: "DIVI48", stock: "3000", id: "2" },
  
]

//muestro todos los usuario
app.get('/products', (req, res) => {
    res.send(productos)
})


app.get('/products/:pid', (req, res) => {
    //hacemos una búsqueda con el ID
    const productsFind = productos.find(p => p.id === req.params.pid)
    if (productsFind) {
         res.send(productsFind)
    }

    res.send({ message: 'ID no encontrado!' })     

})
 










app.listen(PORT, () => {
    console.log(`Te escucho por el puerto ${PORT}`)
}) 
