import { Injectable } from '@angular/core';
import { Guest, Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  model = new Model();
  constructor() { }

  getGuests(){
    return this.model.guests;
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