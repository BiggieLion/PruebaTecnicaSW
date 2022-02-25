/*Interfaz que mostrará los datos de cada pelicula al hacer click*/
export interface Pelicula {
    titulo: string,
    director: string,
    numEpisodio: number,
    lanzamiento: string,
    resumen: string,
    naves: string[],
    personajes: string[],
    planetas: string[]
}