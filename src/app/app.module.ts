import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'; 
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EfetuarReservaComponent } from './components/reserva-components/efetuar-reserva/efetuar-reserva.component';
import { ListarReservaComponent } from './components/reserva-components/listar-reserva/listar-reserva.component';
import { CancelarReservaComponent } from './components/reserva-components/cancelar-reserva/cancelar-reserva.component';
import { ListarHospedesComponent } from './components/hospede-components/listar-hospedes/listar-hospedes.component';
import { CadastrarHospedeComponent } from './components/hospede-components/cadastrar-hospede/cadastrar-hospede.component';
import { CadastrarQuartoComponent } from './components/quarto-components/cadastrar-quarto/cadastrar-quarto.component';
import { ListarQuartosComponent } from './components/quarto-components/listar-quartos/listar-quartos.component';
import { CrudReservasComponent } from './components/reserva-components/crud-reservas/crud-reservas.component';
import { HospedesService } from './services/hospedes-service';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogEditarComponent } from './components/dialog-editar/dialog-editar.component';
import { ModificarReservaComponent } from './components/reserva-components/modificar-reserva/modificar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EfetuarReservaComponent,
    ListarHospedesComponent,
    ReservasComponent,
    ListarReservaComponent,
    CancelarReservaComponent,
    CadastrarHospedeComponent,
    CadastrarQuartoComponent,
    ListarQuartosComponent,
    CrudReservasComponent,
    DialogBoxComponent,
    DialogDeleteComponent,
    DialogEditarComponent,
    ModificarReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    HospedesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
