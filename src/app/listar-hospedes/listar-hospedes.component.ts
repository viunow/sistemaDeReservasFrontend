import { Component, OnInit } from '@angular/core';
import { Hospede } from '../models/hospede';
import { ListarHospedesService } from './listar-hospedes.service';

@Component({
  selector: 'app-listar-hospedes',
  templateUrl: './listar-hospedes.component.html',
  styleUrls: ['./listar-hospedes.component.css']
})
export class ListarHospedesComponent implements OnInit {

  public hospedes: Array<Hospede>;

  constructor(private listarHospedesService: ListarHospedesService) { }

  ngOnInit() {
    this.listarHospedesService.getHospedes()
      .subscribe(hospedes => {
        this.hospedes = hospedes;
      });
  }

}
