import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EfetuarReservaComponent } from './efetuar-reserva/efetuar-reserva.component';
import { ModificarReservaComponent } from './modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { ListarHospedesComponent } from './listar-hospedes/listar-hospedes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'efetuar-reserva', component: EfetuarReservaComponent },
  { path: 'modificar-reserva', component: ModificarReservaComponent },
  { path: 'cancelar-reserva', component: CancelarReservaComponent },
  { path: 'listar-hospedes', component: ListarHospedesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
