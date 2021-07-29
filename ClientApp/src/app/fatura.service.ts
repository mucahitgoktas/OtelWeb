import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fatura, Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class FaturaService {


  baseUrl: string = "http://localhost:5000/"
  model = new Model();
  constructor(private http: HttpClient) { }

  getFaturalar(): Observable<Fatura[]> {
    return this.http.get<Fatura[]>(this.baseUrl + 'api/faturalar');
  }

  addFaturalar(fatura: Fatura): Observable<Fatura> {
    return this.http.post<Fatura>(this.baseUrl + 'api/faturalar', fatura);
  }

  updateFatura(fatura: Fatura) {
    return this.http.put<Fatura>(this.baseUrl + 'api/faturalar/' + fatura.id, fatura)
    

  }

  deleteFatura(fatura: Fatura): Observable<Fatura> {
    return this.http.delete<Fatura>(this.baseUrl + 'api/faturalar/' + fatura.id);
  }

  getFaturaById(id: number) {
    return this.model.faturalar.find(i => i.id == id);
  }

  }