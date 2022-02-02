import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EfetuarReservaInputModel } from 'src/app/models/reserva';

const reservaUrl = "https://localhost:5001/api/reserva";

@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  constructor(private http: HttpClient) { }

  postReserva(input: EfetuarReservaInputModel): Observable<any> {
    return this.http.post(reservaUrl, input);
  }
}
