import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoriacComponent } from './historiac/historiac.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ HistoriacComponent],
  imports: [
    CommonModule, FormsModule,IonicModule
  ],
  exports: [
    HistoriacComponent
    ]
})
export class ComponentsModule { }


 
