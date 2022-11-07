import { Injectable } from '@angular/core';
import { Historia } from '../models/historia.model'
import { AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  public historiaclinica: Historia[] = []
  constructor(public alertController: AlertController) { 
    this.cargarStorage();
  }
  /**
* @function crearPaciente
* @description Agregamos un paciente nuevo donde se guardaran sus datos personales
*/
  crearPaciente(pacienteNombre: string, pacienteApellido: string, pacienteDNI: string, pacienteObraSocial: string, pacienteFecha: Date, pacienteDescripcion: string) {
    let ObjetoHistoria = new Historia(pacienteNombre, pacienteApellido, pacienteDNI, pacienteObraSocial, pacienteFecha, pacienteDescripcion);
    this.historiaclinica.push(ObjetoHistoria);
    this.guardarStorage();
    return ObjetoHistoria.dni;
  }

  guardarStorage() {
    let stringhistoriaclinica: string = JSON.stringify(this.historiaclinica);
    localStorage.setItem('historiaclinica', stringhistoriaclinica);
    
  }

 /**
 * @function cargarStorage
 * @description Carga la historia clínica al local storage
 */
 cargarStorage() {
  const historiaStorage = localStorage.getItem('historiaclinica');
  if (historiaStorage == null) {
  return this.historiaclinica = [];
  }
  let objHistoria = JSON.parse(historiaStorage);
  this.historiaclinica = objHistoria;
  }

   /**
 * @function eliminarPaciente
 * @description Elimina la historia clínica de un paciente
 */

  eliminarPaciente(paciente: Historia) {
    let newHistoria = this.historiaclinica.filter((pacienteItem)=>pacienteItem.dni!==paciente.dni);
    this.historiaclinica = newHistoria;
    this.guardarStorage();
  }

     /**
 * @function editarPaciente
 * @description Elimina la historia clínica de un paciente
 */

      editarPaciente(nombre: string, apellido: string, dni: string, obrasocial: string, nacimiento: Date, descripcion: string){
        let MatchPaciente: Historia = this.historiaclinica.find((pacienteItem) => pacienteItem.dni == dni);
        MatchPaciente.nombre = nombre;
        MatchPaciente.apellido = apellido;
        MatchPaciente.dni = dni;
        MatchPaciente.obrasocial = obrasocial;
        MatchPaciente.nacimiento = nacimiento;
        MatchPaciente.descripcion = descripcion;
        this.guardarStorage();
      }


      obtenerDNI(dniHistoria: string){
        const dni = String(dniHistoria);
        return this.historiaclinica.find((pacienteItem) => pacienteItem.dni = dniHistoria);


      }
}
