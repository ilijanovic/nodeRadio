
import { ClientRequest } from "http"
export function endStream(stream: ClientRequest) {
    return new Promise(res => {
        stream.end(res)
    })
}
