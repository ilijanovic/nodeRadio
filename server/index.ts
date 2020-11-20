import express, { Express } from "express"
import socketio from "socket.io"
import { config } from "../config"
import { getRoutes } from "./routes/get"


const _io = new socketio.Server(config.socket_port)

class App {
    app: Express
    constructor() {
        this.app = express()
        this.mountRoutes()
    }

    private mountRoutes() {
        this.app.use(getRoutes)
    }
}



export const path = "/api/"
export const handler = new App().app
export const io = _io