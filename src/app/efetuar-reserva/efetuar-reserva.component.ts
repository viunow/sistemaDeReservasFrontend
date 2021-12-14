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
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  })

  private reservas: any[] = [];

  constructor(private efetuarReservaService: EfetuarReservaService) { }

  ngOnInit(): void {
    this.reservas = this.efetuarReservaService.getReservas();
  }

}
