const { error } = require("console");

class ProductManager {
    constructor(path) {
        this.nameFile = path;    
        this.fs = require("fs")       
        this.productsFilePath = "./products.json";     
    }

    static id = 0;
    
    crearTxt = async() => {
        try {
            if (!this.fs.existsSync(this.productsFilePath)) {
                //creo archivo
                await this.fs.promises.writeFile(this.productsFilePath, "[]")
            }             
        } catch (error) {
            throw Error ("No se puede crear el archivo " + this.productsFilePath)
        }       
    }
 
    addProduct = async(title, description, price, thumbnail, code, stock) => {        
        try {               
            let newProduct = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: ProductManager.id++
            }   
                          
            // leo producto
            const productsFileContent = await this.fs.promises.readFile(this.productsFilePath, "utf-8")           
           
            // parseo producto           
            const productFileParsed = JSON.parse(productsFileContent)  

            // pusheo nuevo producto             
            productFileParsed.push(newProduct)       
       
            await this.fs.promises.writeFile(this.productsFilePath, JSON.stringify(productFileParsed, null, 2))            
        
        } catch (error) {
            throw Error ("El producto se encuentra agregado")
        }       
    }

    getProducts = async() => {       
        try { 
            const productsFileContent = await this.fs.promises.readFile(this.productsFilePath, "utf-8")    
            if (!this.fs.existsSync(this.productsFilePath)) {
                throw Error("No existe el archivo " + this.productsFilePath)
            }              
            let productos = JSON.parse(productsFileContent)
            console.log("getProducts")       
            console.log(productos)
        } catch (error) {
           throw Error ("El array se encuentra vacío")
        }     
    }

    getProductsById = async(id) => {
        try {
            const productsFileContent = await this.fs.promises.readFile(this.productsFilePath, "utf-8")            
            const productFileParsed = JSON.parse(productsFileContent) 
            const productFinded = productFileParsed.filter((product) => {
                if(product.id === id) {
                    console.log(product)
                }                
            })
        } catch (error) {
            throw Error ("No se encontró ningún producto con el id = " + id)
        }       
    }

    updateProduct = async(id, updateItem) => {
        try {
            const productsFileContent = await this.fs.promises.readFile(this.productsFilePath, "utf-8")            
            const productFileParsed = JSON.parse(productsFileContent) 
            const productFinded = productFileParsed.filter((product) => {
                if(product.id === id) {
                    product.title = updateItem
                }        
            });
            await this.fs.promises.writeFile(this.productsFilePath, JSON.stringify(productFileParsed, null, 2)) 
        } catch (error) {
            throw Error("No pudo modificarse nada")
        }
    }

    deleteProduct = async(id) => {
        try {
            let resultadoBusqueda = await this.fs.promises.readFile(this.productsFilePath, "utf-8") 
              console.log("deleteProduct")
              if (JSON.parse(resultadoBusqueda).id === id) {
                await this.fs.unlink(this.productsFilePath, (error) => {
                    if(error) throw Error ("No se pudo borrar el archivo con el id")
                })           
                
              } else {
                console.log("Nothing with the id = " + id)
              }             
        } catch (error) {
            throw Error("No se encontró nada")
        }    
    }
}



module.exports = ProductManager;



// addProduct falta validación de nuevos productos para que no se repitan
// getProductsByID falta devolver en formato OBJETO y si no encuentra el ID que devuelva el error
// corregir deleteProduct para que SOLO se elimine el archivo que encuentra
