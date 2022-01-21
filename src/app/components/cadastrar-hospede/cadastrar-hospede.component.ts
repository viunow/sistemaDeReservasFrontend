import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createHospede(new CadastrarHospedeInputModel());
  }

  createHospede(hospede: CadastrarHospedeInputModel) {
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

}
