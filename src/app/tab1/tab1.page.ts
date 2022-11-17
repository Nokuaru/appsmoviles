import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { HistoriaService } from '../services/historia.service';
import { PhotoService } from 'src/app/services/photo.service';
import { ClimaService } from '../clima/clima.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  clima:any

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    private historiaService: HistoriaService,
    public photoService: PhotoService,
    public climaService: ClimaService,
    
  ) { }

  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();

}

  async CrearHistoria() {
    let alerta = await this.alertController.create({
      header: "Crear historia clínica"
      ,
      inputs: [
        {
          type: "text",
          name: 'pacienteNombre',
          placeholder: "Ingresar nombre del paciente"
        },
        {
          type: "text",
          name: "pacienteApellido",
          placeholder: 'Ingresar apellido del paciente'
        },

        {
          type: "text",
          name: "pacienteDNI",
          placeholder: 'Ingresar DNI del paciente'
        },

        {
          type: "text",
          name: "pacienteObraSocial",
          placeholder: 'Ingresar Obra social'
        },
        {
          type: "date",
          name: "pacienteNacimiento",
          placeholder: 'Ingresar apellido del paciente'
        },
        {
          type: "textarea",
          name: "pacienteDescripcion",
          placeholder: 'Información complementaria'
        }

      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Crear",
          handler: (data: any) => {
            let isValid: boolean = this.validInput(data);
            if (isValid) {
              let pacienteNombre = data.pacienteNombre;
              let pacienteApellido = data.pacienteApellido;
              let pacienteDNI = data.pacienteDNI;
              let pacienteObraSocial = data.pacienteObraSocial;
              let pacienteNacimiento = data.pacienteNacimiento;
              let pacienteDescripcion = data.pacienteDescripcion;
              let wasCreated = this.historiaService.crearPaciente(pacienteNombre, pacienteApellido, pacienteDNI, pacienteObraSocial, pacienteNacimiento, pacienteDescripcion);
              if (wasCreated) {
                this.presentToast("Paciente creado");
              }

            }

          }
        }
      ]
    });
    await alerta.present();
    console.log("Click en el boton");
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


    } 
    
  

