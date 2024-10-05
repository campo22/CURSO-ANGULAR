import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeno?: string;

  saludar(hermano: string) {
    console.log('hola:', { hermano });
  }

  preguntarPorHijo(): string {
    return 'como esta tu hijo?';
  }
  constructor() {}

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermanoGrande: string) {
    this.hermanoGrande = this.hermanoPequeno;
  }

  getHermanoPequeno(): string {
    return this.hermanoPequeno || '';
  }

  setHermanoPequeo(hermanoPequeno: string) {
    this.hermanoPequeno = hermanoPequeno;
  }
}
