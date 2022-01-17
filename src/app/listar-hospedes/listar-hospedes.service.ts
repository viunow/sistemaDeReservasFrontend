import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '../models/hospede';

@Injectable({
  providedIn: 'root'
})

export class ListarHospedesService {

  constructor(private http: HttpClient) { }

  getHospedes(): Observable<Array<Hospede>> {
    return this.http.get<Array<Hospede>>("https://localhost:5001/api/hospede/");
  }

  getHospede(id: string): Observable<Hospede> {
    // return this.http.get<Hospede>("https://localhost:5001/api/hospede/"+id);
    // return this.http.get<Hospede>("https://localhost:5001/api/hospede/".concat(id));
    // return this.http.get<Hospede>(`https://localhost:5001/api/hospede/${id}`);
    return this.http.get<Hospede>(`https://localhost:5001/api/hospede/${id}`);
  }
 
}
