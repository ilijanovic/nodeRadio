

export interface RadiosInterface {
    radios: RadioInterface[],
    selectedRadio: RadioInterface | {},
}

export interface RadioInterface {
    bitRate: number,
    streamUrl: string,
    name: string,
    path: string,
    value: string
}

export interface ConfigurationInterface {
    socket_port: number
}

