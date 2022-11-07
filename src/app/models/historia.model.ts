import { Consultas } from './consultas.model'


export class Historia {
    nombre: string;
    apellido: string;
    dni: string;
    obrasocial: string;
    nacimiento: Date;
    descripcion: string;
    archivada: boolean;
    item: Consultas[];

    constructor(nombre: string, apellido: string, dni: string, obrasocial: string, nacimiento: Date, descripcion: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.obrasocial = obrasocial;
    this.nacimiento = nacimiento;
    this.descripcion = descripcion;
    this.item = [];
    this.archivada = false;
    }
}
