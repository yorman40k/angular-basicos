import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes.component/heroes.module';
import { ContadorModule } from './contador.component/contador.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        ContadorModule
    ]
})
export class AppModule { }
