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

  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.baseUrl + 'api/guests', guest);
  }

  updateGuest(guest: Guest) {
    return this.http.put<Guest>(this.baseUrl + 'api/guests/' + guest.guestId, guest)
    debugger;

  }

  deleteGuest(guest: Guest): Observable<Guest> {
    return this.http.delete<Guest>(this.baseUrl + 'api/guests/' + guest.guestId);
  }

  getGuestById(id: number) {
    return this.model.guests.find(i => i.guestId == id);
  }

  // saveGuest(guest: Guest) {
  //   if (guest.guestId == 0) {
  //     guest.guestId = this.getGuests.length + 1;
  //     this.model.guests.push(guest);
  //   }
  //   else {
  //     const g = this.getGuestById(guest.guestId);
  //     g.guestId = guest.guestId;
  //     g.adi = guest.adi;
  //     g.soyadi = guest.soyadi;
  //     g.tcKimlikNo = guest.tcKimlikNo;
  //     g.hesKodu = guest.hesKodu;
  //     g.dogumYeri = guest.dogumYeri;
  //     g.odaNo = guest.odaNo;
  //     g.ucret = guest.ucret;
  //     g.ciltNo = guest.ciltNo;
  //     g.notlar = guest.notlar;

  //   }

  // }


}