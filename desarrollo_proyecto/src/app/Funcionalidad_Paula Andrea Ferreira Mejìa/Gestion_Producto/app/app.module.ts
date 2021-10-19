import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionProductosComponent } from './Gestion_de_productos_Paula/gestion-productos/gestion-productos.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionProductosComponent,
    DescripcionProductoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
