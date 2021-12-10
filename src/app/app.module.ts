import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReservasComponent } from './reservas/reservas.component';
import { EfetuarReservaComponent } from './efetuar-reserva/efetuar-reserva.component';
import { ModificarReservaComponent } from './modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { ListarHospedesComponent } from './listar-hospedes/listar-hospedes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EfetuarReservaComponent,
    ListarHospedesComponent,
    ReservasComponent,
    ModificarReservaComponent,
    CancelarReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
