import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  @Input() guest: Guest
  @Input() guests: Guest[];

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {

    // if(this.guest) {
    //   debugger;
    //   var asdf= this.guest;

    // }
  }

  addGuest(adi, soyadi, ciltno, tckimlikno, heskodu, notlar, dogumyeri, odano, guestId) {
    let g = new Guest();
    g.adi = adi;
    g.odaNo = odano;
    g.soyadi = soyadi;
    g.tcKimlikNo = tckimlikno;
    g.hesKodu = heskodu;
    g.ciltNo = ciltno;
    g.dogumYeri = dogumyeri;
    g.notlar = notlar;
    g.guestId = guestId;
    
    debugger;

    this.guestService.updateGuest(g)
      .subscribe(result => {
        this.guests.splice(this.guests.findIndex(x=>x.guestId==g.guestId),1,g);
        
      });
      

  }





}
