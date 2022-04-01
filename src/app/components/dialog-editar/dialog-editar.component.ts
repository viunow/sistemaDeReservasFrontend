import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
  public quarto: Quarto;
  public quartos: Array<Quarto>;

  dataEntrada: '';
  dataSaida: '';

  public quartoSelecionado: Quarto;
  public quartoAtual: any;
  public diferenca: any;
  public quantidadeDias: number;
  public atualizaPrecoReserva = false;

  form = this.formBuilder.group({
    id: '',
    quarto: '',
    dataEntrada: '',
    dataSaida: ''
  })

  constructor(
    private quartosService: QuartosService,
    private reservasService: ReservasService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.reserva = new Reserva();
    this.reservasService.getReservaPorId(this.data)
      .subscribe(reserva => {
        this.reserva = reserva;
        this.quartosService.getQuartos()
          .subscribe(quartos => {
            this.quartos = quartos;
            this.quartoSelecionado = this.quartos.find(a => a.id == this.reserva.quartoId);
            this.quartoAtual = this.quartoSelecionado.preco;
            console.log("quarto atual: " + this.quartoAtual);
            this.configurarForm();
            let date1 = new Date(reserva.dataEntrada);
            let date2 = new Date(reserva.dataSaida);
            this.quantidadeDias = ((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
            console.log("quantidade de dias: " + this.quantidadeDias);
          })
      })
  }

  configurarForm() {
    this.form = this.formBuilder.group({
      id: [this.reserva.id],
      quarto: [this.quartoSelecionado],
      dataEntrada: [this.reserva.dataEntrada],
      dataSaida: [this.reserva.dataSaida],
    })
  }

  onSubmit() {
    let reserva = new Reserva();
    reserva.id = this.form.value.id;
    reserva.quartoId = this.form.value.quarto.id;

    reserva.dataEntrada = typeof this.form.value.dataEntrada == 'string'
      ? new Date(this.form.value.dataEntrada)
      : this.form.value.dataEntrada;

    reserva.dataSaida = typeof this.form.value.dataSaida == 'string'
      ? new Date(this.form.value.dataSaida)
      : this.form.value.dataSaida;

    reserva.dataEntrada.setHours(12, 0, 0);
    reserva.dataSaida.setHours(12, 0, 0);
    this.reservasService.putReserva(reserva)
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

  public quartoChanged(quarto: Quarto) {
    this.diferenca = quarto.preco - this.quartoAtual;
    this.atualizaPrecoReserva = true;
    console.log("Diferença: " + (this.quantidadeDias) * this.diferenca);
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
