import { RadioInterface, StateInterface } from "@/types"

export const state = (): StateInterface => ({
    selectedRadio: {},
    radios: [
        {
            name: 'Hitradio Ö3',
            value: 'hitradio',
            bitRate: 128,
            streamUrl: 'https://orf-live.ors-shoutcast.at/oe3-q2a',
            path: '/images/hitradio.png',
            loaded: false
        },
        {
            name: 'FM4',
            value: 'fm4',
            bitRate: 128,
            streamUrl: 'https://orf-live.ors-shoutcast.at/fm4-q1a',
            path: '/images/fm4.png',
            loaded: false
        },
        {
            name: 'Kronehit',
            value: 'kronehit',
            bitRate: 128,
            streamUrl: 'https://secureonair.krone.at/kronehit1058.mp3',
            path: '/images/kronehit.png',
            loaded: false
        },
        {
            name: 'Arabella',
            value: 'arabella',
            bitRate: 128,
            streamUrl:
                'https://arabellawien.stream.arabella.at/arabellavie?listenerid=2c0cf4124b23d3a8a9fbaf9bb8583985&awparams=companionAds%3Atrue',
            path: '/images/arabella.png',
            loaded: false
        },
        {
            name: "Ö1",
            value: "oe1",
            bitRate: 128,
            streamUrl: "https://orf-live.ors-shoutcast.at/oe1-q2a",
            path: "/images/oe1.png",
            loaded: false
        }
    ],
    playing: false
})

export const mutations = {
    SET_RADIO(state: StateInterface, radio: RadioInterface) {
        state.selectedRadio = radio
        state.playing = true
    },
    SET_RADIO_BY_URL(state: StateInterface, url: string) {
        let radio = state.radios.find(r => r.streamUrl === url)
        if (radio) {
            state.selectedRadio = radio
            state.playing = true
        }
    },
    IMAGE_LOADED(state: StateInterface, index: number) {
        state.radios[index].loaded = true
    }
}

export const getters = {
    radios: (state: StateInterface) => state.radios,
    selectedRadio: (state: StateInterface) => state.selectedRadio,
    playing: (state: StateInterface) => state.playing
}
