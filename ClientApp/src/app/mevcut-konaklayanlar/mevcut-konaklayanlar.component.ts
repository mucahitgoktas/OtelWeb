import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';


@Component({
  selector: 'mevcut-konaklayanlar',
  templateUrl: './mevcut-konaklayanlar.component.html',
  styleUrls: ['./mevcut-konaklayanlar.component.css']
})
export class MevcutKonaklayanlarComponent implements OnInit {

  selectedGuest: Guest;
  guests: Guest[];

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.getGuests();
  }


  getGuests() {
    this.guestService.getGuests().subscribe(guests => {
      this.guests = guests

    });
  }

  title = 'Mevcut Konaklayanlar'

  onSelectGuest(guest: Guest) {
    this.selectedGuest = guest;
  }

  deleteGuest(guest: Guest) {
    this.guestService.deleteGuest(guest);

  }










}
