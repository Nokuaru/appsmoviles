import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(    
    public alertController: AlertController,
    public toastController: ToastController,
    private listaService: ListaService

  ) {}

  async AgregarLista(){
    let alerta = await this.alertController.create(
      {
        header:"Agregar lista",
        inputs:[
          {
            type: "text",
            name: "titulo",
            placeholder: "Ingrese el nombre de la lista"
          }
        ],
        buttons:[
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Crear",
            handler: (data: any) => {
              let isValid: boolean = this.validInput(data);
              if(isValid){
                let titulo = data.titulo;
                let wasCreated = this.listaService.crearLista(titulo);
                if(wasCreated){
                  this.presentToast("Lista creada correctamente");
                }
              }
            }
          }
        ]
      });
    await alerta.present();
    console.log("Hice click!!");
  }

  validInput(input: any): boolean{
    if(input && input.titulo){
      return true;
    }
    this.presentToast("Debe ingresar un valor");
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
