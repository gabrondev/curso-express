import { Router } from "express"

const router = Router();

router.get("/", (req, resp) => {
    resp.send("<h1>Olá mundo</h1>")
})

export default router