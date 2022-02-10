import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hospede } from 'src/app/models/hospede';
import { Quarto } from 'src/app/models/quarto';
import { HospedesService } from 'src/app/services/hospedes-service';
import { EfetuarReservaInputModel } from 'src/app/services/input-models/efetuar-reserva-input-model';
import { QuartosService } from 'src/app/services/quartos-service';
import { ReservasService } from 'src/app/services/reservas-service';

@Component({
  selector: 'app-efetuar-reserva',
  templateUrl: './efetuar-reserva.component.html',
  styleUrls: ['./efetuar-reserva.component.css']
})
export class EfetuarReservaComponent implements OnInit {

  public hospedes: Array<Hospede>;
  public quartos: Array<Quarto>;

  dataEntrada: '';
  dataSaida: '';

  form = this.formBuilder.group({
    hospedeId: '',
    quartoId: '',
    dataEntrada: '',
    dataSaida: ''
  })

  constructor(
    private hospedesService: HospedesService,
    private quartosService: QuartosService,
    private reservasService: ReservasService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.efetuarReserva(new EfetuarReservaInputModel());
    this.hospedesService.getHospedes()
      .subscribe(hospedes => {
        this.hospedes = hospedes;
      });
    this.quartosService.getQuartos()
      .subscribe(quartos => {
        this.quartos = quartos;
      })
  }

  efetuarReserva(reserva: EfetuarReservaInputModel) {
    this.form = this.formBuilder.group({
      hospedeId: [reserva.hospedeId],
      quartoId: [reserva.quartoId],
      dataEntrada: [reserva.dataEntrada],
      dataSaida: [reserva.dataSaida]
    })
  }

  onSubmit() {
    this.form.value.dataEntrada.setHours(12, 0, 0);
    this.form.value.dataSaida.setHours(12, 0, 0);
    this.reservasService.postReserva(this.form.value)
      .subscribe(id => {
        console.log('Reserva efetuada - ID: ', id, this.form.value);
        this.form.reset();
      }, error => alert(error));
  }

  abrirSnackbar() {
    this.snackBar.open('Reserva efetuada com sucesso!', 'Ok', {
      duration: 3000,
    })
  }

}
