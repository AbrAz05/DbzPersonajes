import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado = '';

  borrarHeroe(): void {
    this.heroeBorrado  = this.heroes.shift() || '';
  }
}
