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
    return this.model.guests.find(i=>i.guestId==id);
  }

  saveGuest(guest: Guest){
    if (guest.guestId == 0) {
      guest.guestId = this.getGuests.length+1;
      this.model.guests.push(guest);
    }
    else {
      const g = this.getGuestById(guest.guestId);
      g.adi = guest.adi;
      g.soyadi = guest.soyadi;
      g.guestId = guest.guestId;
      g.tcKimlikNo = guest.tcKimlikNo;
      g.hesKodu = guest.hesKodu;
      g.odaNo = guest.odaNo;
      g.ucret = guest.ucret;
      g.notlar = guest.notlar;
    }

  }

  deleteGuest(guest: Guest)
  {
    this.model.guests = this.model.guests.filter(g=>g!==guest);
  }
}