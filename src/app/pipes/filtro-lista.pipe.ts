import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroLista',
  pure: false
})
export class FiltroListaPipe implements PipeTransform {

  transform(listas: Lista[], tipo: string): Lista[] {
    
    let lista = [];
    switch(tipo){
      case 'por hacer':
        lista = listas.filter((itemLista) => itemLista.completada == false &&   !itemLista.item.some((itemActividad) => itemActividad.completado == true))
        break;
      case 'haciendo':
        lista = listas.filter((itemLista) => itemLista.completada == false &&   itemLista.item.some((itemActividad) => itemActividad.completado == true));
        break;
      case 'terminado':
        lista = listas.filter((itemLista) => itemLista.completada == true);
        break;
    }

    return lista;
  }

}
