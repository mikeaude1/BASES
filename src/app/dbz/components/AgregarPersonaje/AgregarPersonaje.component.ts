import {  Component, EventEmitter, Output, input } from '@angular/core';
import { character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './AgregarPersonaje.component.html',
  styleUrl: './AgregarPersonaje.component.css',
})
export class AgregarPersonajeComponent {
  /**
   * Character: characters  */
  @Output()
 public onNewCharacter:EventEmitter<character> = new EventEmitter();


  public Character: character = {
    Nombre: '',
    Poder: 0
  }

  emitCharacter():void{
    if(this.Character.Nombre.length === 0) return;
    this.onNewCharacter.emit({...this.Character});
    console.log(this.Character);
    this.Character.Nombre='';
    this.Character.Poder=0;
  }


}
