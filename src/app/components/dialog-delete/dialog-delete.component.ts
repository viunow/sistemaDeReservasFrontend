import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservasService } from 'src/app/services/reservas-service';

//interface reserva
// passar o id no deleteReserva
export interface ReservaInputDialog {
  reservaId: string;
}

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})

export class DialogDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: ReservaInputDialog,
    private reservasService: ReservasService
  ) { console.log(data) }
  
  cancelar(): void {
    this.dialogRef.close();
  }

  // openDialog() {
  //   this.dialog.open(DialogDeleteComponent, {
  //     data: {
  //       hospedeId: '',
  //     },
  //   });
  // }

  deletar(data: ReservaInputDialog): void {
    this.reservasService.deleteReserva(data.reservaId)
      .subscribe(response => console.log('delete reserva from reservas response: ', response))
      this.dialogRef.close();
  }

}
