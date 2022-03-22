import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quarto } from 'src/app/models/quarto';
import { Reserva } from 'src/app/models/reserva';
import { QuartosService } from 'src/app/services/quartos-service';
import { ReservasService } from 'src/app/services/reservas-service';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {

  public reserva: Reserva;
  public quartos: Array<Quarto>;

  dataEntrada: '';
  dataSaida: '';
  quartoSelecionado = '';

  form = this.formBuilder.group({
    id: '',
    quartoId: '',
    dataEntrada: '',
    dataSaida: ''
  })

  constructor(
    private quartosService: QuartosService,
    private reservasService: ReservasService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
    this.reserva = new Reserva();
    this.reservasService.getReservaPorId(this.data)
      .subscribe(reserva => {
        this.reserva = reserva;
        this.quartosService.getQuartos()
          .subscribe(quartos => {
            this.quartos = quartos;
            this.configurarForm();
          })
      })
  }

  configurarForm() {
    this.form = this.formBuilder.group({
      id: [this.reserva.id],
      quartoId: [this.reserva.quartoId],
      dataEntrada: [this.reserva.dataEntrada],
      dataSaida: [this.reserva.dataSaida]
    })
  }

  onSubmit() {
    this.form.value.dataEntrada.setHours(12, 0, 0);
    this.form.value.dataSaida.setHours(12, 0, 0);
    this.reservasService.putReserva(this.form.value)
      .subscribe(id => {
        console.log('Reserva modificada - ID: ', id, this.form.value);
        this.abrirSnackbar();
        this.form.reset();
        this.reservasService.getReservasSubject();
      }, this.error);
  }

  abrirSnackbar() {
    this.snackBar.open('Reserva modificada com sucesso!', 'Ok', {
      duration: 3000,
    })
  }

  public error = (error: any): void => {
    if (typeof error == 'string')
      this.toast(error);
    else if (error && typeof error == 'object' && error.error.Message)
      this.toast(error.error.Message);
    else
      this.toast("Erro ao modificar reserva, tente novamente.");
  }

  public toast(message: string): void {
    this.snackBar.open(message, "X", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }

}
