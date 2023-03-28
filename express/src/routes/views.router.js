import express from "express"

const router = express.Router()

let food = [
    {name: "Chocolate", price: "500"},
    {name: "Galletitas", price: "400"},
    {name: "Snacks", price: "100"},
    {name: "Frigobar", price: "200"},
    {name: "Ice-cream", price: "300"},
]

router.get('/food', (req, res) => {
    let testUser = {
        name: "Aznar",
        last_name: "Melchor",
        role: "admin"
    }

    res.render('index', {
        user: testUser,
        //validación
        isAdmin: testUser.role === 'admin',
        //aca le digo que tenga en cuenta el archivo index.css
        style: "index.css",
        food
    })
})

router.get('/', (req, res) => {
    let testUser = {
        name: "Aznar",
        last_name: "Melchor",
        role: "user"
    }

    res.render('index', {
        user: testUser,
        //validación
        isAdmin: testUser.role === 'admin',
        food
    })
})






export default router