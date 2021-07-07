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

  addGuest(guest: Guest){
    this.model.guests.push(guest);

  }
}