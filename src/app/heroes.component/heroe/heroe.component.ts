import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'BachataMan';
    edad:string = 'Aquel que baila bachata no tiene edad';

    nombre1: string = 'Aurelio de Jesus Mariano Carlos';
    apellido: string = ' de la Cruz Hidalgo Contreras y Murillo';
    
    bandera = 0;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${this.nombre1} ${this.apellido}`;
    }

    cambiarNombre(): string {
        if(this.bandera === 0){
           this.bandera = 1; 
           return this.nombre = 'Capitan Cumbia'
        }

        this.bandera = 0;
        return this.nombre = 'BachataMan';
    }

    cambiarEdad() : string {
        if(this.bandera === 0){
           this.bandera = 1; 
           return this.edad = 'Tan viejo como la cumbia misma'
        }

        this.bandera = 0;
        return this.edad = 'Aquel que baila bachata no tiene edad';
    }
}