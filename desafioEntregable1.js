class ProductManager {
    constructor () {        
        this.products = [];
        this.id = 0;  
    }    
    //static id = 0;   
    addProduct(title, description, price, thumbnail, code, stock, id){  
        id = this.id++            
        this.products.push( {title, description, price, thumbnail, code, stock, id} )  
        
      //	ProductManager.id++;
    }
   	getProducts(){       
        return this.products
    }
    getProductById(id) {  
            const resultado = this.products.filter(producto => {
            if (producto.id === id) {
                console.log (producto)
            } else {
                console.log("NOT FOUND")
            }
        }) 
    
        // const resultado = this.products.filter((product) => product.id === id)
        // console.log(resultado) 
    }
}

const bandas = new ProductManager()
bandas.addProduct("RHCP", "Funky rock style", 500, "Url1:", "RHCP3", 10000)
bandas.addProduct("Tho Doors", "Morrison Style", 700, "Url2:", "DOOR6", 15000)
bandas.addProduct("Pink Floyd", "Psychodelic style", 650, "Url3:", "PINK1", 20000)


//console.log(bandas.getProducts())


bandas.getProductById(1)
