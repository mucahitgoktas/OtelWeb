import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest, Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  
  baseUrl: string = "http://localhost:5000/"
  model = new Model();
  constructor(private http: HttpClient) { }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.baseUrl + 'api/guests');
  }

  getGuestById(id: number){
    return this.model.guests.find(i=>i.id==id);
  }

  saveGuest(guest: Guest){
    if (guest.id == 0) {
      guest.id = this.getGuests.length+1;
      this.model.guests.push(guest);
    }
    else {
      const g = this.getGuestById(guest.id);
      g.adi = guest.adi;
      g.soyadi = guest.soyadi;
      g.id = guest.id;
      g.tckimlikno = guest.tckimlikno;
      g.heskodu = guest.heskodu;
      g.odano = guest.odano;
      g.ucret = guest.ucret;
      g.notlar = guest.notlar;
    }

  }

  deleteGuest(guest: Guest)
  {
    this.model.guests = this.model.guests.filter(g=>g!==guest);
  }
}