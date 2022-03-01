/*Interfaz que mostrará los datos de cada pelicula al hacer click*/
export interface Pelicula {
    title: string,
    director: string,
    episode_id: number,
    release_date: string,
    opening_crawl: string,
    vehicles: string[],
    characters: string[],
    planets: string[],
}