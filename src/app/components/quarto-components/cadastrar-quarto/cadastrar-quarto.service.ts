import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastrarQuartoInputModel } from "src/app/services/input-models/cadastrar-quarto-input-model";

@Injectable({
    providedIn: 'root'
})

export class CadastrarQuartoService {
    constructor (private http: HttpClient) { }

    postQuarto(input: CadastrarQuartoInputModel): Observable<any> {
        return this.http.post('https://localhost:5001/api/quarto', input);
    }
}