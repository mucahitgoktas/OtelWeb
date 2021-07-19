import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'yeni-rezervasyon',
  templateUrl: './yeni-rezervasyon.component.html',
  styleUrls: ['./yeni-rezervasyon.component.css']
})
export class YeniRezervasyonComponent implements OnInit {
  @Input() guests: Guest[];
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  addGuest(adi, soyadi, ciltno, tckimlikno, heskodu, notlar, dogumyeri, odano) {
    let g = new Guest();
    g.adi = adi;
    g.odaNo = odano;
    g.soyadi = soyadi;
    g.tcKimlikNo = tckimlikno;
    g.hesKodu = heskodu;
    g.ciltNo = ciltno;
    g.dogumYeri = dogumyeri;
    g.notlar = notlar;
    g.guestId = 0;
    
    this.guestService.addGuest(g)
      .subscribe(guest => {
        
        this.guests.push(guest);
      });

  }

  title = "Misafir Kayıt";
  aboutT = "Yeni Misafir Kaydı";

}
