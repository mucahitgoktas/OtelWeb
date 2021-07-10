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

  addGuest(guest: Guest): Observable<Guest>
  {
    return this.http.post<Guest>(this.baseUrl + 'api/guests', guest);
  }

  getGuestById(id: number){
    return this.model.guests.find(i=>i.GuestId==id);
  }

  saveGuest(guest: Guest){
    if (guest.GuestId == 0) {
      guest.GuestId = this.getGuests.length+1;
      this.model.guests.push(guest);
    }
    else {
      const g = this.getGuestById(guest.GuestId);
      g.Adi = guest.Adi;
      g.Soyadi = guest.Soyadi;
      g.GuestId = guest.GuestId;
      g.TcKimlikNo = guest.TcKimlikNo;
      g.HesKodu = guest.HesKodu;
      g.OdaNo = guest.OdaNo;
      g.Ucret = guest.Ucret;
      g.CiltNo = guest.CiltNo;
      g.DogumYeri = guest.DogumYeri;
    }

  }

  deleteGuest(guest: Guest)
  {
    this.model.guests = this.model.guests.filter(g=>g!==guest);
  }
}