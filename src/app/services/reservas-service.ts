import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Reserva } from '../models/reserva';

const reservaUrl = "https://localhost:5001/api/reserva";

@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  public reservas = new Subject<Array<Reserva>>();
  constructor(private http: HttpClient) { }

  postReserva(input: Reserva): Observable<any> {
    return this.http.post(reservaUrl, input);
  }

  getReservaPorId(id: string): Observable<Reserva> {
    return this.http.get<Reserva>(`${reservaUrl}/${id}`);
  }

  getReservas(): Observable<Array<Reserva>> {
    return this.http.get<Array<Reserva>>(reservaUrl);
  }

  getReservasSubject() {
    this.http.get<Array<Reserva>>(reservaUrl).subscribe(data => {
      this.reservas.next(data);
    });
  }

  putReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${reservaUrl}/${reserva.id}`, reserva);
  }

  deleteReserva(id: string): Observable<void> {
    return this.http.delete<void>(`${reservaUrl}/${id}`);
  }

}
