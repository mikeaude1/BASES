
import { Injectable } from '@angular/core';
import { character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:character []=[
    {
    id: uuid(),
    Nombre: 'Goku',
    Poder: 10000
  },
{
  id: uuid(),
  Nombre: 'krillin',
  Poder: 1000
},
{
  id: uuid(),
  Nombre: 'Vegueta',
  Poder: 9500
},
]
deleteCharacterById(id:string):void{
  let cont = -1;
  this.characters.forEach(element => {
    cont +=1;
    if (element.id === id){
      this.characters.splice(cont,1);
      return
    }
  });
}
/* emitIndex(index:number):void{
this.characters.splice(index,1);
}*/
onNewCharacter(character:character):void{
  const newCharacter:character={ id:uuid(), ...character };
  this.characters.push(newCharacter);
}


}
