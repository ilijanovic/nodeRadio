import { EventEmitter } from "events"
import { decoderConfig, speakerConfig } from "../config/speaker"
import Speaker from "speaker"
import https from "https"
import { IncomingMessage } from "http"
//@ts-expect-error
import lame from "@suldashi/lame"
import { ClientRequest } from "http"
import { sleep } from "../utils/radio"
export let emitter = new EventEmitter()


let request: ClientRequest | null = null
let speaker: Speaker | null = null
let response: IncomingMessage | null = null

emitter.on("play", async (url) => {
    if (speaker) {
        speaker.destroy()
        await sleep(3000)
    }
    request = https.get(url, (res: IncomingMessage) => {
        speaker = new Speaker(speakerConfig)
        let decoder = new lame.Decoder(decoderConfig)
        response = res
        res.pipe(decoder, { end: false }).pipe(speaker, { end: false })
    })
})

emitter.on("abort", () => {
    if (speaker) {
        speaker.destroy()
    }
})

emitter.on("pause", () => {
    if (speaker) {
        speaker.cork()
    }
})

emitter.on("resume", () => {
    if (speaker) {
        speaker.uncork()

    }
})
