import express from "express"
import rotasBasico from "./routes/basico"
import rotasDiferentesRetornos from "./routes/diferentesRetornos"

const app = express()
const porta = 8080

// middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next();
// })

app.use(rotasBasico);

app.use(rotasDiferentesRetornos);

app.listen(porta, () => {
    console.log("Servidor Rodando")
})