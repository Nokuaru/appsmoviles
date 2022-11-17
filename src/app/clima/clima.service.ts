import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor() { }

  async temperaturaActual() {
    try {
      const temperatura = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.67&lon=-58.44&units=metric&appid=522f6e8a92c6f236482ac8c5ca55dd61',

        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

      if (!temperatura.ok) {
        throw new Error('Error al recibir la temperatura');
      }

      const resultado = (await temperatura.json());
      const el = document.createElement('div');

      el.textContent = 'La temperatura en Buenos Aires es: ' + resultado.main.temp + 'º';

      el.setAttribute('title', 'my-title');
      el.style.color = 'white';
      el.style.fontSize = '12px';

      const tempera = document.getElementById('tempera');

      tempera?.appendChild(el);
      return resultado.main.temp





    }
    catch (e) {

    }
  }
}
