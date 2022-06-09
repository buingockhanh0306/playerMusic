export interface IListSongProps{
    key?: string,
    title: string,
    type: string,
    thumbnail?: string,
    streamUrls?:{
        streamUrl: string
    },
    artists?:{
        name: string,
    }[],
    duration: string
}