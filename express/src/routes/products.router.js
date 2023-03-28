import {Router} from 'express'
import ProductManager from "../service/ProductManager.js"

const router = Router()
const products = new ProductManager("./files/products.json")


//endpoints
router.get("/", async (req, res) => {
    // instancio getProducts()
    try {
        let productos = await products.getProducts()            
        // const limit = req.query.limit
        // if(limit) {
        //     products = productos.slice(0, parseInt(limit))            
        // }
        res.send(productos)
    } catch (error) {
        res.status(500, {error: "Error consultando los productos", message: error})
    }
})

router.get("/:pid", async(req, res) => {
    try {
        const productId = await products.getProductsById(parseInt(req.params.pid))
        if(productId) {
            res.send(productId)
        }

    } catch (error) {
        res.status(500, { error: "Usuario no encontrado" })
    }
})


router.post("/", async (req, res) =>{
    try {       
        const {title, description, price, thumbnail, code, stock} = req.body
        await products.addProduct(title, description, price, thumbnail, code, stock);
        // const product = req.body;
        // await products.addProduct(product.title, product.description, product.price, product.thumbnail, product.code, product.stock);
        
        res.status(201).send({mensaje: "Producto creado con éxito! Con título:" + title});
    } catch (error) {       
        res.status(500).send({error: "Error guardando producto", mesagge: error});
    }
});

// router.put("/:pid", async (req, res) => {
//     try {
//         const modifyProductById = await products.updateProduct(parseInt(req.params.pid))
//         if (modifyProductById) {
//             res.send(modifyProductById)
//         }

//     } catch (error) {
//         res.status(500).send({error: "No se encuentra el id proporcionado"})
//     }
// })











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