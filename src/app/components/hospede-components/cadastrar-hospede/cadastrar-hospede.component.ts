import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastrarHospedeInputModel } from 'src/app/services/input-models/cadastrar-hospede-input-model';
import { HospedesService } from 'src/app/services/hospedes-service';

@Component({
  selector: 'app-cadastrar-hospede',
  templateUrl: './cadastrar-hospede.component.html',
  styleUrls: ['./cadastrar-hospede.component.css']
})

export class CadastrarHospedeComponent implements OnInit {

  form = this.formBuilder.group({
    nome: '',
    telefone: '',
    email: '',
    cpf: ''
  });

  constructor(
    private hospedesService: HospedesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.criarHospede(new CadastrarHospedeInputModel());
  }

  criarHospede(hospede: CadastrarHospedeInputModel) {
    this.form = this.formBuilder.group({
      nome: [hospede.nome],
      telefone: [hospede.telefone],
      email: [hospede.email],
      cpf: [hospede.cpf]
    })
  }

  onSubmit() {
    this.hospedesService.postHospede(this.form.value)
      .subscribe(id => {
        console.log('Hospede cadastrado', this.form.value);
        this.form.reset();
      }, error => alert(error));
  }

  abrirSnackbar() {
    this.snackBar.open('Hóspede cadastrado com sucesso!', 'Ok', {
      duration: 3000,
    });
  }
}
