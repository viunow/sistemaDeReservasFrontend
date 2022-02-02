import { Component, OnInit } from '@angular/core';
import { Quarto } from 'src/app/models/quarto';
import { QuartosService } from 'src/app/services/quartos-service';

@Component({
  selector: 'app-listar-quartos',
  templateUrl: './listar-quartos.component.html',
  styleUrls: ['./listar-quartos.component.css']
})
export class ListarQuartosComponent implements OnInit {

  public quartos: Array<Quarto>;

  panelOpenState = false;

  constructor(private quartosService: QuartosService) { }

  ngOnInit(): void {
    this.quartosService.getQuartos()
      .subscribe(quartos => {
        this.quartos = quartos;
      })
  }

}
