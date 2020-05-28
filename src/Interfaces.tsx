
// INTERFACES

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<any>,
}

export interface IAction {
    type: string,
    payload: any
}

export interface IEpisode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: {medium: string, original: string},
    summary: string
}


export interface IButton {
    toggleFavAvtion: (episode: IEpisode) => void
    episode: IEpisode,
    favourites: Array<any>,
}