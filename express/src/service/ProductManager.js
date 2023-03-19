import fs from "fs"

class ProductManager {
    constructor(path) {
        this.nameFile = path;  
        this.fs = fs   
    }

    static id = 0;

    creoArchivo = async() => {
        try {
            if (!this.fs.existsSync(this.nameFile)) {
                //creo archivo
                await this.fs.promises.writeFile(this.nameFile, "[]")
            }             
        } catch (error) {
            throw Error ("No se puede crear el archivo " + this.nameFile)
        }       
    }  
    
    addProduct = async(title, description, price, thumbnail, code, stock) => {  
        
        let newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ProductManager.id++
        }   
        try {                         
            // leo producto
            const productsFileContent = await this.fs.promises.readFile(this.nameFile, "utf-8")           
          
            // parseo producto           
            const productFileParsed = JSON.parse(productsFileContent)  

            // await this.creoArchivo()
                    
            // await this.getProducts()

            if (productFileParsed.find(u => u.id === newProduct.id)) {
                console.warn("Producto ya existente.");
            } else {          
                   // pusheo nuevo producto         
                productFileParsed.push(newProduct)            
                await this.fs.promises.writeFile(this.nameFile, JSON.stringify(productFileParsed, null, 2))                                
            }         
         
        } catch (error) {
            throw Error (`El producto se encuentra agregado, detalle del error: ${error}`)
        }       
    }

    getProducts = async() => {       
        try { 
            await this.creoArchivo()

            const productsFileContent = await this.fs.promises.readFile(this.nameFile, "utf-8")    
            if (!this.fs.existsSync(this.nameFile)) {
                throw Error("No existe el archivo " + this.nameFile)
            }              
            let productos = JSON.parse(productsFileContent)             
            return productos
        } catch (error) {
           throw Error (`El array se encuentra vacío, detalle del error: ${error}`)
        }     
    }

    getProductsById = async(id) => {
        await this.getProducts()


        try {
            const productsFileContent = await this.fs.promises.readFile(this.nameFile, "utf-8")            
            const productFileParsed = JSON.parse(productsFileContent) 
         

           const searchingProduct = productFileParsed.find(p => p.id === id)
           if(id) {
            return searchingProduct
           } else {
            console.warn(`Producto no encontrado con el id: ${id}`)
           }

            // const productFinded = productFileParsed.filter(async(product) => {
            //     if(product.id === id) {
            //         console.log(product)
            //         //return await product
            //     } else {
            //         console.warn(`No se encontró el producto con id: ${id}`)
            //     }            
            // })
        } catch (error) {
            throw Error (`No se encontró ningún producto con el id = ${id}`)
        }       
    }

    updateProduct = async(id, updateItem) => {
        try {
            const productsFileContent = await this.fs.promises.readFile(this.nameFile, "utf-8")            
            const productFileParsed = JSON.parse(productsFileContent) 
            const productFinded = productFileParsed.filter((product) => {
                if(product.id === id) {
                    product.title = updateItem
                }        
            });
            await this.fs.promises.writeFile(this.nameFile, JSON.stringify(productFileParsed, null, 2)) 
        } catch (error) {
            throw Error("No pudo modificarse nada")
        }
    }

    deleteProduct = async(id) => {
        try {
            let resultadoBusqueda = await this.fs.promises.readFile(this.nameFile, "utf-8") 
              console.log("deleteProduct")
              if (JSON.parse(resultadoBusqueda).id === id) {
                await this.fs.unlink(this.nameFile, (error) => {
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




//Si utilizo module.exports luego para llamar se utiliza 'require'
//module.exports = ProductManager;

//Si utilizo export default luego para llamar se utiliza 'import'
export default ProductManager;



// addProduct falta validación de nuevos productos para que no se repitan
// getProductsByID falta devolver en formato OBJETO y si no encuentra el ID que devuelva el error
// corregir deleteProduct para que SOLO se elimine el archivo que encuentra
