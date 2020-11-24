

export interface StateInterface {
    radios: RadioInterface[],
    selectedRadio: RadioInterface | {},
    playing: boolean,
    soundControl: boolean
}

export interface RadioInterface {
    bitRate: number,
    streamUrl: string,
    name: string,
    path: string,
    value: string,
    loaded: boolean
}

export interface ConfigurationInterface {
    socket_port: number
}



