import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '../models/hospede';
import { CadastrarHospedeInputModel } from './input-models/cadastrar-hospede-input-model';

const baseUrl = "https://localhost:5001/api/hospede/";

@Injectable({
  providedIn: 'root'
})

export class HospedesService {

  constructor(private http: HttpClient) { }

  postHospede(input: CadastrarHospedeInputModel): Observable<any> {
    return this.http.post(baseUrl, input);
  }

  getHospedes(): Observable<Array<Hospede>> {
    return this.http.get<Array<Hospede>>(baseUrl);
  }
 
}
