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

// router.get("/:id", async(req, res) => {
//     console.log(req.params); //URL /
//     console.log(req.query); //URL/queryParams ?variable=valor&variable2=valor
//     const productId = parseInt(req.params.id);
//     if(productId){
//         let productIndex  = products.findIndex((p) => p.id === productId);
//         await res.send(productIndex === -1 ? "Producto no encontrado" : products[productIndex]);
//     }else {
//        res.status(400).send({error: "400", menssage: "El id es invalido o no existe."});
//     }
//     await res.send(products);
// });

router.post("/", async(req, res) => {
    try {
        const product = req.body
        await products.addProduct()
        res.status(201).send({message: "Producto agregado con éxito"})

    } catch (error) {
        res.status(500).send({error: "Error guardando producto", message: error})
    }
})










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