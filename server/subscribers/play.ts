import { EventEmitter } from "events"
import { decoderConfig, speakerConfig } from "../config/speaker"
import Speaker from "speaker"
import https from "https"
//@ts-expect-error
import lame from "@suldashi/lame"
import { ClientRequest } from "http"
export let emitter = new EventEmitter()


let request: ClientRequest | null = null
let speaker: Speaker | null = null
emitter.on("play", async (url) => {
    if (speaker) {
        speaker.destroy()
    }

    request = https.get(url, (res) => {
        speaker = new Speaker(speakerConfig)
        let decoder = new lame.Decoder(decoderConfig)
        res.pipe(decoder, { end: false }).pipe(speaker, { end: false })
    })
})

emitter.on("abort", () => {
    if (speaker) {
        speaker.destroy()
    }
})


