import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Hulk', 'Pantera Negra', 'Thor'];

  otherHeroes: string[] = ['Capitan America', 'IronMan', 'DareDevil', 'Iron Fist']

  deletedHeroes: string[] = [];

  flag: boolean = false;

  deleteHeroe(){
    this.deletedHeroes.push(this.heroes[0])
    return this.heroes.shift()
  }

  addHeroe(){
    this.heroes.push(this.otherHeroes[0]);
    this.otherHeroes.shift();
    return this.heroes
  }
}
