import express from "express"

const app = express()
const porta = 8080

app.use("/", (req, resp) => {
    resp.send("<h1>Olá mundo</h1>")
})

app.listen(porta, () => {
    console.log("Servidor Rodando")
})