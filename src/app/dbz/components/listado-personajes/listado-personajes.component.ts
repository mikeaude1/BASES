import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { character } from '../../interfaces/characters.interface';


@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrl: './listado-personajes.component.css'
})
export class ListadoPersonajesComponent {
  @Input()
  public characterList: character[] = [{
    Nombre: 'Trunks',
    Poder: 5000
  }]
  @Input()
  public indice:number = 0;
  @Output()
  public deleteCharactersById:EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(index:number):void{
    //TODO:Emitir el ID del Personaje
    this.deleteCharactersById.emit(this.characterList[index].id);
    console.log(index)}

}
 /* public emitIndex:EventEmitter<number> = new EventEmitter();
  onDeleteCharacter(index:number):void{
    //TODO:Emitir el ID del Personaje
    this.emitIndex.emit(index);
    console.log(index)
  }*/
