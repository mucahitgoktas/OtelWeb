import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';


@Component({
  selector: 'mevcut-konaklayanlar',
  templateUrl: './mevcut-konaklayanlar.component.html',
  styleUrls: ['./mevcut-konaklayanlar.component.css']
})
export class MevcutKonaklayanlarComponent implements OnInit {
  guests: Guest[];
  selectedGuest: Guest;

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.guests = this.guestService.getGuests();
  }

  title = 'Mevcut Konaklayanlar'

  onSelectGuest(guest : Guest){
    this.selectedGuest = guest;
  }
  

   




   
  

}
