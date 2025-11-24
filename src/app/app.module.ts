import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ingredientes } from './ingredientes/ingredientes';
import { Receta } from './receta/receta';

@NgModule({
  declarations: [
    AppComponent,
    Ingredientes,
    Receta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
