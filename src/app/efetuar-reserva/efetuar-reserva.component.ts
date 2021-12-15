import { Component, OnInit } from '@angular/core';
import { EfetuarReservaService } from './efetuar-reserva.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-efetuar-reserva',
  templateUrl: './efetuar-reserva.component.html',
  styleUrls: ['./efetuar-reserva.component.css']
})
export class EfetuarReservaComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }

  private reservas: any[] = [];

  constructor(private efetuarReservaService: EfetuarReservaService) { }

  ngOnInit(): void {
    this.reservas = this.efetuarReservaService.getReservas();
  }

}
