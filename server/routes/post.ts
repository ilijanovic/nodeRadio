import { RequestHandler, Router } from "express"
import { radioController } from "../controller/radio"

let router = Router()


router.post("/stream", <RequestHandler>radioController.playRadioHandler)

router.post("/abort", <RequestHandler>radioController.abortHandler)


export { router as postRoutes }