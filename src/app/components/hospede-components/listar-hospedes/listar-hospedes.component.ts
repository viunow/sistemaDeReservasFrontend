import { Component, OnInit } from '@angular/core';
import { Hospede } from 'src/app/models/hospede';
import { HospedesService } from 'src/app/services/hospedes-service';

@Component({
  selector: 'app-listar-hospedes',
  templateUrl: './listar-hospedes.component.html',
  styleUrls: ['./listar-hospedes.component.css']
})

export class ListarHospedesComponent implements OnInit {

  public hospedes: Array<Hospede>;
  public data: string;

  panelOpenState = false;

  constructor(private hospedesService: HospedesService) { }

  ngOnInit() {
    this.hospedesService.getHospedes()
      .subscribe(hospedes => {
        this.hospedes = hospedes;
      });
  }

  quitarPendencia(hospede: Hospede) {
    this.hospedesService.removerPendenciaHospede(hospede)
      .subscribe(hospede => {
        console.log('Pendência quitada.', hospede);
        this.hospedesService.getHospedes()
          .subscribe(hospedes => {
            this.hospedes = hospedes;
          });
      });
  }
}
