import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastrarHospedeService } from './cadastrar-hospede.service';
import { CadastrarHospedeInputModel } from 'src/app/services/input-models/cadastrar-hospede-input-model';

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
    private cadastrarHospedeService: CadastrarHospedeService, 
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
    this.cadastrarHospedeService.postHospede(this.form.value)
      .subscribe(id => {
        console.log('Hospede cadastrado', this.form.value);
        this.form.reset();
      }, error => alert(error));
  }

  abrirSnackbar() {
    this.snackBar.open('Hóspede cadastrado com sucesso!', 'X', {
      duration: 3000,
    });
  }
}
