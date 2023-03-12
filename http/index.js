const http = require("http")
const PORT = 8060

// creo el servidor
const server = http.createServer((req, res) => {
    res.end("Server creado")    
})

server.listen(PORT, () => {
    console.log(`Server escuchando por el puerto ${PORT}`)
}) 