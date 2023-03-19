import { Router } from "express";

const router = Router()

// endpoints

router.get("/", (req, res) => {
   res.send("HOla soy carts!!")
})



export default router