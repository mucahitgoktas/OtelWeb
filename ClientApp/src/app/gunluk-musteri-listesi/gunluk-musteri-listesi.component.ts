import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'gunluk-musteri-listesi',
  templateUrl: './gunluk-musteri-listesi.component.html',
  styleUrls: ['./gunluk-musteri-listesi.component.css']
})
export class GunlukMusteriListesiComponent implements OnInit {
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

  title = 'Günlük Müşteri Listesi'

  

  

  

 







}
