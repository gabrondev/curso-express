import path from "path"
import { Router } from "express"

const router = Router();

router.get("/objeto", (req, res) => {
    const obj = { nome: "Maria", idade: 41 }
    res.send(obj)
})

router.get("/arrayDeObjetos", (req, res) => {
    const objs = [
        { modelo: "Gol", ano: 1998 },
        { modelo: "Uno", ano: 2005 },
        { modelo: "Celta", ano: 2010 }
    ]
    res.send(objs)
})

router.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "pagina.html"))
})

router.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "arquivo.pdf"))
})

router.get("/variavel", (req, res) => {
    let v = "adeus"
    res.send(v)
})

router.get("/variavelNumerica", (req, res) => {
    let v = 1751
    res.json(v)
})

export default router;