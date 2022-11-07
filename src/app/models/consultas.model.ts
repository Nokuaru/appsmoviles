import { UserPhoto } from "../services/photo.service";

export class Consultas {
    fecha: Date;
    descripcion:string;
    photos: UserPhoto;


    /** Acá tengo que ver como goma poner imágenes*/     

    constructor(fecha: Date, descripcion: string) {
    this.fecha = fecha;
    this.descripcion = descripcion;

    }

    
    }
    