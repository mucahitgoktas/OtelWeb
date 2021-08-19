import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Irezervasyon, Rezervasyon } from './models/rezervasyon';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonService {
  baseUrl: string = "http://localhost:5000/"
  private rezervasyonSource = new BehaviorSubject<Irezervasyon>(null);
  rezervasyon$ = this.rezervasyonSource.asObservable();


  constructor(private http: HttpClient) { }

  getRezervasyon(id: string) {
    return this.http.get(this.baseUrl + 'rezervasyon?id=' + id)
      .pipe(
        map((rezervasyon: Irezervasyon) => {
          this.rezervasyonSource.next(rezervasyon)
        })
      );
  }

  setRezervasyon(rezervasyon:Irezervasyon){
    return this.http.post(this.baseUrl + 'rezervasyon', rezervasyon).subscribe((response : Irezervasyon)=>{
      this.rezervasyonSource.next(response);
    },error=>{
      console.log(error);
    })
  }

  getCurrentRezervasyonValue(){
    return this.rezervasyonSource.value;
  }

  }


