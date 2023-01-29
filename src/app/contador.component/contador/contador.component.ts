import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html',
    styleUrls: ['./contador.component.css']
  })
export class ContadorComponent {
  title: string = 'Contador App';
  number: number  = 0;
  base: number = 5;

  plus() {
    return this.number = this.number + this.base;
  }

  less() {
    return this.number = this.number - this.base;
  }

  restore() {
    return this.number = 0;
  }
}