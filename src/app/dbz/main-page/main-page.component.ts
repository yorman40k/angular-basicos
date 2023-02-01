import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  characters : Character[] = [];

  newCharacter : Character = {
    name: '',
    power: 0
  }

  addCharacter(){

    this.characters.push(this.newCharacter)
    this.newCharacter = {
      name: '',
      power: 0
    }    
  }

}
