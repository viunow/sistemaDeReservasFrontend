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
  numero = "";

  form = this.formBuilder.group({
    tipoQuarto: '',
    numero: '',
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
      tipoQuarto: [quarto.tipoQuarto],
      numero: [quarto.numero]
    })
  }

  onSubmit() {
    this.quartosService.postQuarto(this.form.value)
      .subscribe(id => {
        console.log('Quarto cadastrado', this.form.value);
        this.snackBar.open('Quarto cadastrado com sucesso!', 'Ok');
        this.form.reset();
      }, this.error);
  }

  public error = (error: any): void => {
    if (typeof error == 'string')
      this.toast(error);
    else if (error && typeof error == 'object' && error.error.Message)
      this.toast(error.error.Message);
    else
      this.toast("Erro ao cadastrar quarto, tente novamente.");
  }

  public toast(message: string): void {
    this.snackBar.open(message, "X", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }
}
