import { RequestHandler, Router } from "express"
import { radioController } from "../controller/radio"

let router = Router()


router.get("/currentUrl", <RequestHandler>radioController.getCurrentUrlHandler)

router.get("/getVol", <RequestHandler>radioController.getVolHandler)

export { router as getRoutes }