import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '../models/hospede';
import { CadastrarHospedeInputModel } from './input-models/cadastrar-hospede-input-model';

const hospedeUrl = "https://localhost:5001/api/hospede/";

@Injectable({
  providedIn: 'root'
})

export class HospedesService {

  constructor(private http: HttpClient) { }

  getHospedePorId(id: string): Observable<Hospede> {
    return this.http.get<Hospede>(`${hospedeUrl}/${id}`);
  }

  postHospede(input: CadastrarHospedeInputModel): Observable<any> {
    return this.http.post(hospedeUrl, input);
  }

  getHospedes(): Observable<Array<Hospede>> {
    return this.http.get<Array<Hospede>>(hospedeUrl);
  }

  removerPendenciaHospede(hospede: Hospede): Observable<Hospede> {
    return this.http.patch<Hospede>(`${hospedeUrl}${hospede.id}/removerpendencia`, hospede);
  }
}
