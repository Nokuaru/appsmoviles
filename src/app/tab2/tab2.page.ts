import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { HistoriaService } from '../services/historia.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public historiaService: HistoriaService,
    public alertController: AlertController,
    public toastController: ToastController,
    public photoService: PhotoService,
    
  ) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }


}
