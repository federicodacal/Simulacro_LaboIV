import { Pelicula } from "./pelicula";

export class Actor {

    nombre:string;
    apellido:string;
    peliculas:Pelicula[] | undefined;

    constructor(nombre:string, apellido:string, peliculas?:Pelicula[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.peliculas = peliculas;
    }

}
