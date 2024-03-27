import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string='Superman';
  public edad:number=39;

  cambiarNombre(){
    this.nombre = 'Clark Kent';
 }
 cambiarEdad(){
  this.edad = 40;
 }
 get capitalizedName():string{
  return  this.nombre.toUpperCase();
 }

 getHeroDescription(nomheroe:string):string{
  let heroe: string
  if (nomheroe.toLowerCase() =='superman'){
   heroe= `${nomheroe} vuela a la edad de: ${this.edad} años`;
  }else{
     heroe =`${nomheroe} no vuela y su edad es: ${this.edad} años`;
  }
  return  heroe;
 }

 chageHero():void{
  this.nombre ="Batman";
  this.edad = 45;
  this.getHeroDescription(this.nombre);
 }
 reset():void{
  this.nombre ='Superman';
  this.edad = 39;
 }
}
