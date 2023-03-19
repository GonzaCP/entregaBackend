import {Router} from 'express'
import ProductManager from "../service/ProductManager.js"

const router = Router()
const products = new ProductManager("./files/products.json")



//armar los endpoints
router.get("/", async (req, res) => {
    // instancio getProducts()

    try {
        let productos = await products.getProducts()
        console.log(productos)
        const limit = req.query.limit
        if(limit) {
            products = productos.slice(0, parseInt(limit))            
        }
        res.send(productos)
    } catch (error) {
        res.status(500, {error: "Error consultando los productos", message: error})
    }
})


router.post("/", async (req, res) =>{
    try {       
        const product = req.body;
        await products.addProduct(product.title, product.description, product.price, product.thumbnail, product.code, product.stock);
        res.status(201).send({mensaje: "Producto creado con éxito! Con título:" + product.title});
    } catch (error) {       
        res.status(500).send({error: "Error guardando producto", mensagge: error});
    }
});











// router.get("/:id", (req, res) => {

//     const productId = parseInt(req.params.id)
//     if(productId) {
//         let productIndex = productos.findIndex((p) => p.id === productId)
//         res.send(productIndex === -1 ? "not finded" : productos[productIndex])
//     } else {
//         res.status(400).send({error: "400", message: "Id inválido o no existe."})
//     }
//     res.send(productos)
// })


export default router