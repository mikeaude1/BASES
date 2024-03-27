import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   public Listheroes:string[]=['Superman','Batman','Flash','Wonder-Woman','Cyborg']
   public borradoExitoso: boolean = false;
   public heroeBorrado: string | null = null;

   public borrarUHeroe():void{
    let ultimo:number= this.Listheroes.length - 1
    this.borradoExitoso=true;
     const heroeBorrado=  this.Listheroes[ultimo];
      //heroeBorrado = this.Listheroes.pop(); te quita el ultimo elemento de un arreglo y lo regresa
    this.Listheroes.length = ultimo;
    this.heroeBorrado = heroeBorrado
  }
}
