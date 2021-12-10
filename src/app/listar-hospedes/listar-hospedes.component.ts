import { Component, OnInit } from '@angular/core';
import { ListarHospedesService } from './listar-hospedes.service';

@Component({
  selector: 'app-listar-hospedes',
  templateUrl: './listar-hospedes.component.html',
  styleUrls: ['./listar-hospedes.component.css']
})
export class ListarHospedesComponent implements OnInit {

  public hospedes: any[] = [];

  constructor(private listarHospedesService: ListarHospedesService) { }

  ngOnInit() {
    this.hospedes = this.listarHospedesService.getHospedes();
  }

}
