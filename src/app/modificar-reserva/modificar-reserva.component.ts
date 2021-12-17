import { Component, OnInit } from '@angular/core';

interface Hospede {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {

  hospedes: Hospede[] = [
    {value: 'user1', viewValue: 'Vinicius Neto'},
    {value: 'user2', viewValue: 'John Doe'},
    {value: 'user3', viewValue: 'Linus Torvalds'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
