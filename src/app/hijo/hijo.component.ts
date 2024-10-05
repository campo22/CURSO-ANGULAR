import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarhijo = new EventEmitter<void>();
  @Output() decrementarhijo = new EventEmitter<void>();
  mensaje: string = '';

  enviarmensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
  incrementar1() {
    this.incrementarhijo.emit();
  }
  decrementar2() {
    this.decrementarhijo.emit();
  }
}
