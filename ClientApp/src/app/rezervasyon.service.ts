import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Irezervasyon, IrezervasyonItem, Rezervasyon, RezervasyonItem } from './models/rezervasyon';
import { Guest } from './models/model';


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

  setRezervasyon(rezervasyon: Irezervasyon) {
    return this.http.post(this.baseUrl + 'rezervasyon', rezervasyon).subscribe((response: Irezervasyon) => {
      this.rezervasyonSource.next(response);
      console.log(response)
    }, error => {
      console.log(error);
    })
  }

  getCurrentRezervasyonValue() {
    return this.rezervasyonSource.value;
  }

  addItemToRezervasyon(item: Guest) {
    const additem: IrezervasyonItem = this.mapGuestToRezervasyonItem(RezervasyonItem)
  }
  mapGuestToRezervasyonItem(rezervasyonItem: any): IrezervasyonItem {
    throw new Error('Method not implemented.');
  }

}


