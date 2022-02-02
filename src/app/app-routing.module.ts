import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EfetuarReservaComponent } from './components/reserva-components/efetuar-reserva/efetuar-reserva.component';
import { ModificarReservaComponent } from './components/reserva-components/modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './components/reserva-components/cancelar-reserva/cancelar-reserva.component';
import { ListarHospedesComponent } from './components/hospede-components/listar-hospedes/listar-hospedes.component';
import { CadastrarHospedeComponent } from './components/hospede-components/cadastrar-hospede/cadastrar-hospede.component';
import { CadastrarQuartoComponent } from './components/quarto-components/cadastrar-quarto/cadastrar-quarto.component';
import { ListarQuartosComponent } from './components/quarto-components/listar-quartos/listar-quartos.component';
import { CrudReservasComponent } from './components/reserva-components/crud-reservas/crud-reservas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'efetuar-reserva', component: EfetuarReservaComponent },
  { path: 'modificar-reserva', component: ModificarReservaComponent },
  { path: 'cancelar-reserva', component: CancelarReservaComponent },
  { path: 'listar-hospedes', component: ListarHospedesComponent },
  { path: 'cadastrar-hospede', component: CadastrarHospedeComponent },
  { path: 'cadastrar-quarto', component: CadastrarQuartoComponent },
  { path: 'listar-quartos', component: ListarQuartosComponent },
  { path: 'crud-reservas', component: CrudReservasComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
