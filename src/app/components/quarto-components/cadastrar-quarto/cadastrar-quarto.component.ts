import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuartosService } from 'src/app/services/quartos-service';
import { CadastrarQuartoInputModel } from 'src/app/services/input-models/cadastrar-quarto-input-model';

@Component({
  selector: 'app-cadastrar-quarto',
  templateUrl: './cadastrar-quarto.component.html',
  styleUrls: ['./cadastrar-quarto.component.css']
})
export class CadastrarQuartoComponent implements OnInit {

  tipoQuarto = "";

  form = this.formBuilder.group({
    tipoQuarto: ''
  });

  constructor(
    private quartosService: QuartosService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.criarQuarto(new CadastrarQuartoInputModel());
  }

  criarQuarto(quarto: CadastrarQuartoInputModel) {
    this.form = this.formBuilder.group({
      tipoQuarto: [quarto.tipoQuarto]
    })
  }

  onSubmit() {
    this.quartosService.postQuarto(this.form.value)
      .subscribe(id => {
        console.log('Quarto cadastrado', this.form.value);
        this.form.reset();
      }, error => alert(error));
  }

  abrirSnackbar() {
    this.snackBar.open('Quarto cadastrado com sucesso!', 'X', {
      duration: 3000,
    });
  }
}
