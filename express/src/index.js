import express, { request, response } from "express"

const app = express()
const PORT = 8060


app.get("/saludo", (req, res) => {
    res.send("que ondaaaaaa!")
    // res.send({" nombre: Esteban"}) ---> enviando archivo JSON
})






app.listen(PORT, () => {
    console.log(`Te escucho por el puerto ${PORT}`)
}) 

