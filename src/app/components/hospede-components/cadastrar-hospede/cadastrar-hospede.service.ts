import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastrarHospedeInputModel } from 'src/app/services/input-models/cadastrar-hospede-input-model';

@Injectable({
    providedIn: 'root'
})

export class CadastrarHospedeService {
    
    constructor(private http: HttpClient) { }

    postHospede(input: CadastrarHospedeInputModel): Observable<any> {
        return this.http.post('https://localhost:5001/api/hospede', input);
    }
}