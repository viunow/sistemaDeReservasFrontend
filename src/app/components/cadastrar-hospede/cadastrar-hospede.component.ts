import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-hospede',
  templateUrl: './cadastrar-hospede.component.html',
  styleUrls: ['./cadastrar-hospede.component.css']
})
export class CadastrarHospedeComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
