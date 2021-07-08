import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  @Input() guest : Guest

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }
  

  // addGuest(id,odano,adi,soyadi,ucret,tckimlikno,heskodu,notlar)
  // {
  //   const g = new Guest(id,adi,soyadi,tckimlikno,heskodu,odano,ucret,notlar)
  //   this.guestService.saveGuest(g);
  //   this.guest = null;

  // }

}
