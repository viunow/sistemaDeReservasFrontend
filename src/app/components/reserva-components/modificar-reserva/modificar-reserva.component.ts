import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quarto } from 'src/app/models/quarto';
import { Reserva } from 'src/app/models/reserva';
import { ModificarReservaInputModel } from 'src/app/services/input-models/modificar-reserva-input-model';
import { QuartosService } from 'src/app/services/quartos-service';
import { ReservasService } from 'src/app/services/reservas-service';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {

  public reserva: Reserva;
  public quartos: Array<Quarto>;

  dataEntrada: '';
  dataSaida: '';

  form = this.formBuilder.group({
    quartoId: '',
    dataEntrada: '',
    dataSaida: ''
  })

  constructor(
    private quartosService: QuartosService,
    private reservasService: ReservasService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.modificarReserva(new ModificarReservaInputModel());
    // this.reservasService.getReservaPorId()
    //   .subscribe(reserva => {
    //     this.reserva = reserva;
    //   })
    this.quartosService.getQuartos()
      .subscribe(quartos => {
        this.quartos = quartos;
      })
  }

  modificarReserva(reserva: ModificarReservaInputModel) {
    this.form = this.formBuilder.group({
      quartoId: [reserva.quartoId],
      dataEntrada: [reserva.dataEntrada],
      dataSaida: [reserva.dataSaida]
    })
  }

  onSubmit() {
    this.form.value.dataEntrada.setHours(12, 0, 0);
    this.form.value.dataSaida.setHours(12, 0, 0);
    this.reservasService.putReserva(this.form.value)
      .subscribe(id => {
        console.log('Reserva modificada - ID: ', id, this.form.value);
        this.form.reset();
      }, error => alert("Erro ao modificar reserva " + error));
  }

  abrirSnackbar() {
    this.snackBar.open('Reserva modificada com sucesso!', 'Ok', {
      duration: 3000,
    })
  }

}
