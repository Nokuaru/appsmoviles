import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Consultas } from '../models/consultas.model';
import { Historia } from '../models/historia.model';
import { HistoriaService } from '../services/historia.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
public historia: Historia;
pacienteItem: string;

  constructor(private router: ActivatedRoute,
    public historiaService: HistoriaService
) { 

let dniHistoria = this.router.snapshot.paramMap.get('dniHistoria');
this.historia = this.historiaService.obtenerDNI(dniHistoria);
}

  ngOnInit() {
  }

   

}
