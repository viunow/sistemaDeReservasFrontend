import { Component, OnInit } from '@angular/core';
import { Quarto } from 'src/app/models/quarto';
import { ListarQuartosService } from './listar-quartos.service';

@Component({
  selector: 'app-listar-quartos',
  templateUrl: './listar-quartos.component.html',
  styleUrls: ['./listar-quartos.component.css']
})
export class ListarQuartosComponent implements OnInit {

  public quartos: Array<Quarto>;

  constructor(private listarQuartosService: ListarQuartosService) { }

  ngOnInit(): void {
    this.listarQuartosService.getQuartos()
      .subscribe(quartos => {
        this.quartos = quartos;
      })
  }

}
