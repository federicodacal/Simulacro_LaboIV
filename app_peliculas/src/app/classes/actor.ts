import { Pelicula } from "./pelicula";

export class Actor {

    nombre:string;
    apellido:string;
    pais:string;
    peliculas:Pelicula[] | undefined;

    constructor(nombre:string, apellido:string, pais:string, peliculas?:Pelicula[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.peliculas = peliculas;
    }

}
