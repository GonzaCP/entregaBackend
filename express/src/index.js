const ProductManager = require("./ProductManager.js")

const product1 = new ProductManager()

let agregandoProductos = async () => {
    await product1.crearTxt()
    // await product1.addProduct("RHCP", "Funky style", 599, "Url1: ", "RHCP45", 1000)
    // await product1.addProduct("Pink Floyd", "Acid barret", 799, "Url2: ", "PINK68", 2000)
    // await product1.addProduct("Greta Van Fleet", "Zepellin's style", 499, "Url3: ", "GRETA46", 500)

    await product1.getProducts()

    //product1.getProductsById(0)

    //product1.updateProduct(1, "La Renga")

}
agregandoProductos()