import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastrarQuartoInputModel } from "src/app/services/input-models/cadastrar-quarto-input-model";
import { Quarto } from "../models/quarto";

const baseUrl = 'https://localhost:5001/api/quarto';

@Injectable({
    providedIn: 'root'
})

export class QuartosService {
    constructor (private http: HttpClient) { }

    postQuarto(input: CadastrarQuartoInputModel): Observable<any> {
        return this.http.post(baseUrl, input);
    }

    getQuartos(): Observable<Array<Quarto>> {
        return this.http.get<Array<Quarto>>(baseUrl);
    }
}