import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EfetuarReservaComponent } from './components/efetuar-reserva/efetuar-reserva.component';
import { ModificarReservaComponent } from './components/modificar-reserva/modificar-reserva.component';
import { CancelarReservaComponent } from './components/cancelar-reserva/cancelar-reserva.component';
import { ListarHospedesComponent } from './components/listar-hospedes/listar-hospedes.component';
import { CadastrarHospedeComponent } from './components/cadastrar-hospede/cadastrar-hospede.component';
import { CadastrarQuartoComponent } from './components/cadastrar-quarto/cadastrar-quarto.component';
import { ListarQuartosComponent } from './components/listar-quartos/listar-quartos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'efetuar-reserva', component: EfetuarReservaComponent },
  { path: 'modificar-reserva', component: ModificarReservaComponent },
  { path: 'cancelar-reserva', component: CancelarReservaComponent },
  { path: 'listar-hospedes', component: ListarHospedesComponent },
  { path: 'cadastrar-hospede', component: CadastrarHospedeComponent },
  { path: 'cadastrar-quarto', component: CadastrarQuartoComponent },
  { path: 'listar-quartos', component: ListarQuartosComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
