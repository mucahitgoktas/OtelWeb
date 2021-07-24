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

  addGuest(adi, soyadi, ciltNo, tcKimlikNo, hesKodu, notlar, dogumYeri, odaNo, guestId) {
    let g = new Guest();
    this.guest.guestId = g.guestId; 
    g.adi = adi;
     g.odaNo = odaNo;
     g.soyadi = soyadi;
     g.tcKimlikNo = tcKimlikNo;
     g.hesKodu = hesKodu;
     g.ciltNo = ciltNo;
     g.dogumYeri = dogumYeri;
     g.notlar = notlar;
     g.guestId = guestId;

     console.log(this.guest.guestId);
    
    debugger;

    this.guestService.updateGuest(g)
      .subscribe(result => {
        this.guests.splice(this.guests.findIndex(x=>x.guestId==g.guestId),1,g);
        
      });
      debugger;
      

  }





}
