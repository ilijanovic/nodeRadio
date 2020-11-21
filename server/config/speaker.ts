
import Speaker from "speaker"
//@ts-expect-error
import lame from "@suldashi/lame"

export const speakerConfig = {
    channels: 2,          // 2 channels
    bitDepth: 16,        // 16-bit samples
    sampleRate: 44100     // 44,100 Hz sample rate
}
export const speaker = new Speaker(speakerConfig);

export const decoderConfig = {
    // input
    channels: 2,        // 2 channels (left and right)
    bitDepth: 16,       // 16-bit samples
    sampleRate: 44100,  // 44,100 Hz sample rate

    // output
    bitRate: 128,
    outSampleRate: 22050,
    mode: lame.STEREO // STEREO (default), JOINTSTEREO, DUALCHANNEL or MONO
}
export const decoder = new lame.Decoder(decoderConfig);
