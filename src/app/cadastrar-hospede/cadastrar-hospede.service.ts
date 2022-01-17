import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '../models/hospede';

// @Injectable({
//     providedIn: 'root'
// })

// export class CadastrarHospedeService {
    
//     constructor(private http: HttpClient) { }

//     postHospede(): Observable<Hospede> {
//         return this.http.post<Hospede>('https://localhost:5001/api/hospede');
//     }
// }