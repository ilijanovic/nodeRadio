import express, { Express } from "express"
import socketio from "socket.io"
import { config } from "../config"
import { postRoutes } from "./routes/post"
import { getRoutes } from "./routes/get"
import { emitter } from "./subscribers/play"

const io = new socketio.Server(config.socket_port, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})

class App {
    app: Express
    constructor() {
        this.app = express()
        this.mountRoutes()
    }

    private mountRoutes() {
        this.app.use(express.json(), postRoutes)
        this.app.use(getRoutes)
    }
}


io.on("connection", socket => {
    socket.on("setVol", (data: number) => {
        emitter.emit("setVol", data)
    })
})

export const path = "/api/"
export const handler = new App().app
