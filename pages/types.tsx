export interface BookInfo {
    id: string,
    selfLink: string;
    volumeInfo: {
        title: string
        categories: []
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
        },
        authors: string[],
        publishedDate: string,
        printType: string
    }
    searchInfo: {
        textSnippet: string
    }
}