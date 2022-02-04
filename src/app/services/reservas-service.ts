import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

const reservaUrl = "https://localhost:5001/api/reserva";

@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  constructor(private http: HttpClient) { }

  postReserva(input: Reserva): Observable<any> {
    return this.http.post(reservaUrl, input);
  }

  getReservas(): Observable<Array<Reserva>> {
    return this.http.get<Array<Reserva>>(reservaUrl);
  }

  //putReserva()
  putReserva(input: Reserva): Observable<any> {
    return this.http.put(reservaUrl, input);
  }

  //DeleteReserva()
  deleteReserva(id: String) {
    return this.http.delete(reservaUrl + '/'+id);
  }
  
}
