import express, { request, response } from "express"
import handlebars from 'express-handlebars'
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'

//


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//configuramos hbs (handlebars)
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + "/views/") 
app.set('view engine', 'handlebars')

//carpeta public/uso de arhivos estáticos
app.use(express.static(__dirname + '/public'))


// app.get('/hello', (req, res) => {
//     // usuario de prueba
//     let testUser = {
//         name: 'AlfonsParpelo',
//         last_name: 'Perlita',
//         edad: 45
//     }
//     // el primer parámetro es la plantilla .handlebars que quiero utilzar, en este caso index.handlebars
//     res.render('index', testUser)


// })

//usando router y handlebars
app.use('/', viewsRouter)



app.get("/", (req, res) => {
    res.send("We're in!")
})


//Routers
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)





app.listen(PORT, () => {
    console.log(`Te escucho por el puerto ${PORT}`)
}) 
