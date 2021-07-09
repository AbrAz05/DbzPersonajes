import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  nombre = 'Iron man';
  edad = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

  // One Way DataBinding
  // Enalzado en una sola Via
  // Estas props solo estan enlazadas de unica manera,
  // Las propiedades dentro del HTML solo cambian si cambian
  // dentro de la clase

  // Existe el Two Way Databinding
  // Que es cambiar propiedades dentro del HTML
}