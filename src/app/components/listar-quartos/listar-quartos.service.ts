import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quarto } from '../../models/quarto';

const baseUrl = "https://localhost:5001/api/quarto/";

@Injectable({
    providedIn: 'root'
})

export class ListarQuartosService {
    
    constructor(private http: HttpClient) { }

    getQuartos(): Observable<Array<Quarto>> {
        return this.http.get<Array<Quarto>>(baseUrl);
    }
}