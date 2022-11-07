import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Historia } from 'src/app/models/historia.model';
import { HistoriaService } from 'src/app/services/historia.service';
import { Consultas } from 'src/app/models/consultas.model';
import { PhotoService } from 'src/app/services/photo.service';



@Component({
  selector: 'app-historiac',
  templateUrl: './historiac.component.html',
  styleUrls: ['./historiac.component.scss'],
})
export class HistoriacComponent implements OnInit {


  constructor(
    public historiaService: HistoriaService,
    public alertController: AlertController,
    public toastController: ToastController,
    public photoService: PhotoService,
    private router: Router,
    
  ) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();

}

    /**
     /**
      * 
      * 
 * @function editarPaciente
 * @description Edita la información personal del paciente
 */
      async editarPaciente(pacienteItem: Historia) {
        let alerta = await this.alertController.create({
          header: "Editar historia clínica"
          ,
          inputs: [
            {
              type: "text",
              name: 'pacienteNombre',
              placeholder: "Ingresar nombre del paciente",
              value: pacienteItem.nombre
            },
            {
              type: "text",
              name: "pacienteApellido",
              placeholder: 'Ingresar apellido del paciente',
              value: pacienteItem.apellido
            },
    
            {
              type: "text",
              name: "pacienteDNI",
              placeholder: 'Ingresar DNI del paciente',
              value: pacienteItem.dni
            },
    
            {
              type: "text",
              name: "pacienteObraSocial",
              placeholder: 'Ingresar Obra social',
              value: pacienteItem.obrasocial
            },
            {
              type: "date",
              name: "pacienteNacimiento",
              placeholder: 'Ingresar apellido del paciente',
              value: pacienteItem.nacimiento
            },
            {
              type: "textarea",
              name: "pacienteDescripcion",
              placeholder: 'Información complementaria',
              value: pacienteItem.descripcion
            }
    
          ],
          buttons: [
            {
              text: "Cancelar",
              role: "cancel"
            },
            {
              text: "Editar",
              handler: (data: any) => {
                let isValid: boolean = this.validInput(data);
                if (isValid) {
                  let pacienteNombre = data.pacienteNombre;
                  let pacienteApellido = data.pacienteApellido;
                  let pacienteDNI = data.pacienteDNI;
                  let pacienteObraSocial = data.pacienteObraSocial;
                  let pacienteNacimiento = data.pacienteNacimiento;
                  let pacienteDescripcion = data.pacienteDescripcion;
                  this.historiaService.editarPaciente(pacienteNombre, pacienteApellido, pacienteDNI, pacienteObraSocial, pacienteNacimiento, pacienteDescripcion)
                  this.presentToast('Paciente editado correctamente');

                  }
    
                }
    
              }
            
          ]
        });

        await alerta.present();
        console.log("Click en el boton");
        
      }
 
  /**
  * @function eliminarPaciente
  * @description Función eliminar el paciente seleccionado
  * @param { Historia } pacienteItem paciente a archivar
  */
   eliminarPaciente(pacienteItem: Historia) {
    this.historiaService.eliminarPaciente(pacienteItem)

  }

  /**
  * @function archivarPaciente
  * @description Función archivar el paciente seleccionado
  * @param { Historia } pacienteItem paciente a archivar
  */
  archivarPaciente(pacienteItem: Historia) {
    console.log("Archivar", pacienteItem);
  }


   
  async agregarVisita(pacienteItem: Historia)
  {
    console.log("this is the one" + pacienteItem.dni)
    let alerta = await this.alertController.create({
      header: "Agregar visita"
      ,
      inputs: [
        {
          type: "date",
          name: 'visitaFecha',
          placeholder: "Ingresar fecha de la visita",
        },

        {
          type: "textarea",
          name: 'visitaInfo',
          placeholder: "Ingrese la información de la visita"
        }
      ],
      buttons:[
,
        {
          text: "Cancelar",
          role: "cancel"
        },
     
        {
          text: "Agregar",
          handler: (data: any) => {
          let visitaFecha = data.visitaFecha;
          let visitaInfo = data.visitaInfo;
          const consulta = new Consultas (visitaFecha, visitaInfo);
          pacienteItem.item.push(consulta);
          this.historiaService.guardarStorage();
        }
      }
      ]

    });
    await alerta.present();




  }  

  validInput(input: any): boolean {
    if (input && input.pacienteNombre) {
      return true;
    }
    this.presentToast("Debe ingresar un nombre");
    return false;
  }

  async presentToast(mensaje: string): Promise<void> {
    let toast = await this.toastController.create(
      {
        message: mensaje,
        duration: 2000
      }
    );
    toast.present();
  }

  async verDetalle(historia: Historia)
  {
    console.log(historia.apellido)
     let alerta = await this.alertController.create({
      header: historia.item[0].fecha.toString(),
      message: historia.item[0].descripcion,
      buttons: ['OK'],
    });
    await alerta.present();       
  }





}

