import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/models/reserva';
import { ReservasService } from 'src/app/services/reservas-service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {

  public reservas: Array<Reserva>;
  dataSource = new MatTableDataSource<Array<Reserva>>();

  displayedColumns: string[] = [
    'id', 
    'nomeHospede', 
    'tipoQuarto', 
    'dataEntrada', 
    'dataSaida',
    'action'
  ];
  // dataSource = new MatTableDataSource<Array<Reserva>>();
  
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private reservasService: ReservasService
  ) { }

  abrirDialog() {
    
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '100%',
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
    this.dataSource.paginator = this.paginator;
    this.reservasService.getReservas()
      .subscribe(reservas => {
        this.reservas = reservas;
      });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}
