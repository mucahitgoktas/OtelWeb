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
  @Input() guests : Guest[];

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
    debugger;
    if(this.guest) {
      var asdf= this.guest;
      debugger;
    }
  }

  addGuest(id, ucret, odano, adi, soyadi, tckimlikno, heskodu, ciltno, dogumyeri, notlar) {

    // let g = new Guest(id, ucret, odano, adi, soyadi, tckimlikno, heskodu, ciltno, dogumyeri, notlar);
    // this.guestService.updateGuest(g)
    //   .subscribe(result => {
    //     this.guests.splice(this.guests.findIndex(x => x.guestId==g.guestId),1,g);
    //   });
    //   this.guest = null;

  }

  
  

  
}
