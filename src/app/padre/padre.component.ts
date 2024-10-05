import { Component } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  mensajeRecibido: string = '';

  recibirMensaje($Event: string) {
    this.mensajeRecibido = $Event;
  }

  valorContador: number = 0;
  incrementa() {
    this.valorContador++;
  }

  decrementa() {
    this.valorContador--;
  }
}
