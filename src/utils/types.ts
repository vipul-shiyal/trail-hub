export interface Movie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}
export interface DetailProps {
    Title: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot?: string,
    Language?: string,
    Country?: string,
    Awards?: string,
    Poster: string,
    imdbRating?: string,
    imdbID?: string,
    BoxOffice: string,
}

export interface IMoviesList {
    adult: boolean,
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview:string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    name?: string
}
export interface IWatchLater {
    name: string,
    mediaType: string,
    status?: 'checked' | 'unchecked'
}

