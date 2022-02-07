import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ReservasService } from 'src/app/services/reservas-service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { EfetuarReservaComponent } from '../efetuar-reserva/efetuar-reserva.component';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {

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

  abrirDialog() {
    
  }

  deletarDialog() {
    
  }

  efetuarReservaDialog() {
    this.dialog.open(EfetuarReservaComponent, {
      width: '50%'
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    // var d = new Date();
    // this.dataSource.push({
    //   id:d.getTime(),
    //   name:row_obj.name
    // });
    // this.table.renderRows();
  }
  updateRowData(row_obj){
    // this.dataSource = this.dataSource.filter((value,key)=>{
    //   if(value.id == row_obj.id){
    //     value.name = row_obj.name;
    //   }
    //   return true;
    // });
  }
  deleteRowData(row_obj){
    // this.dataSource = this.dataSource.filter((value,key)=>{
    //   return value.id != row_obj.id;
    // });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.reservasService.getReservas()
      .subscribe(reservas => {
        this.reservas.data = reservas;
      });
  }

  putData() {
    // this.reservasService.putReserva()
    //   .subscribe(reservas => {
    //     this.reservas.data = reservas;
    //   });
  }

  deleteData() {
    this.reservasService.deleteReserva()
      .subscribe();
  }

  ngAfterViewInit() {
    this.reservas.paginator = this.paginator;
  }

}
