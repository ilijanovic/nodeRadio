import { Request, Response, NextFunction } from "express"
import { emitter } from "../subscribers/play"
class RadioController {
    public playRadioHandler(req: Request, res: Response, next: NextFunction) {
        emitter.emit("play", req.body.url)
        return res.status(200).json({ message: "started stream" })
    }

    public abortHandler(req: Request, res: Response, next: NextFunction) {
        emitter.emit("abort")
        return res.status(200).json({ message: "Stream aborted" })
    }
}


export const radioController: RadioController = new RadioController()