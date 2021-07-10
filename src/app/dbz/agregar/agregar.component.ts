import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // @Input() personajesAgregar: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor( private dbzService: DbzService ) {}

  // @Output() onNewZFighter: EventEmitter<Personaje> = new EventEmitter();

  agregar( /* event: any */ ) {
    // event.preventDefault();
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }
    // this.onNewZFighter.emit(this.nuevo);
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
