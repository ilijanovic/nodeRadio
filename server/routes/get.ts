import { RequestHandler, Router } from "express"
import { radioController } from "../controller/radio"

let router = Router()


router.get("/currentUrl", <RequestHandler>radioController.getCurrentUrlHandler)

export { router as getRoutes }