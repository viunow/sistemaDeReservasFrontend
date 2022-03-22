import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ReservasService } from 'src/app/services/reservas-service';
import { EfetuarReservaComponent } from '../efetuar-reserva/efetuar-reserva.component';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { DialogEditarComponent } from '../../dialog-editar/dialog-editar.component';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  public reservas = new MatTableDataSource<any>([]);

  displayedColumns: string[] = [
    'nomeHospede', 
    'tipoQuarto', 
    'dataEntrada', 
    'dataSaida',
    'action'
  ];
  
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private reservasService: ReservasService
  ) { }

  ngOnInit(): void {
    this.reservasService.getReservasSubject();
    this.reservasService.reservas.subscribe(reservas => {
      this.reservas.data = reservas;
    });
  }

  getData() {
    this.reservasService.getReservas()
      .subscribe(reservas => {
        this.reservas.data = reservas;
      });
  }

  efetuarReservaDialog() {
    this.dialog.open(EfetuarReservaComponent, {
      width: '50%'
    });
  }

  editarDialog(id: string) {
    this.dialog.open(DialogEditarComponent, {
      data: id,
      width: '50%'
    });
  }

  deletarDialog(id: string) {
    this.dialog.open(DialogDeleteComponent, {
      data: {
        reservaId: id
      },
      width: '20%'
    });
  }

  ngAfterViewInit() {
    this.reservas.paginator = this.paginator;
  }

}
