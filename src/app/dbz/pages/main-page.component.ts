import { Component} from "@angular/core";
import { DbzService } from '../services/dbz.service';
import { character } from '../interfaces/characters.interface';

@Component({
  selector:'app-dbz-main-page',
  templateUrl:'main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzService: DbzService ){ }
    get characters():character[]{
      return this.dbzService.characters;
    }
    deleteCharacterById(id:string):void{
      this.dbzService.deleteCharacterById(id)
    }
    onNewCharacter(character:character):void{
      this.dbzService.onNewCharacter(character);
    }
  }
