import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/models/model';
import { RezervasyonService } from 'app/rezervasyon.service';
import { SearchFilterPipe } from 'app/search-filter.pipe';


@Component({
  selector: 'mevcut-konaklayanlar',
  templateUrl: './mevcut-konaklayanlar.component.html',
  styleUrls: ['./mevcut-konaklayanlar.component.css']
})
export class MevcutKonaklayanlarComponent implements OnInit {

  selectedGuest: Guest;
  guests: Guest[];
  search: SearchFilterPipe;

  constructor(private guestService: GuestService, private rezervasyonService : RezervasyonService) { }

  ngOnInit(): void {
    this.getGuests();
  }

  addItemToRezervasyon(){
    this.rezervasyonService.addItemToRezervasyon(this.selectedGuest)
    debugger;
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
    this.guestService.deleteGuest(guest).subscribe(g => {
      this.getGuests();
    });

  }

  searchValue: string;

  // backspace basınca çalışan event
  onKeydown(event) {
    
    this.search.transform(this.guests, this.searchValue);
    
  }













}
