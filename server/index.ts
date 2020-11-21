import express, { Express } from "express"
import socketio from "socket.io"
import { config } from "../config"
import { postRoutes } from "./routes/post"

//@ts-expect-error
const _io = socketio(config.socket_port)

class App {
    app: Express
    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.mountRoutes()
    }

    private mountRoutes() {
        this.app.use(postRoutes)
    }
}



export const path = "/api/"
export const handler = new App().app
export const io = _io