import { Component } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css'],
})
export class HermanoComponent {
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}
}
