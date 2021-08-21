import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/models/model';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'yeni-rezervasyon',
  templateUrl: './yeni-rezervasyon.component.html',
  styleUrls: ['./yeni-rezervasyon.component.css']
})
export class YeniRezervasyonComponent implements OnInit {
  @Input() guests: Guest[] = [];
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  title = "Misafir Kayıt";
  aboutT = "Yeni Misafir Kaydı";

  addGuest(adi, soyadi, ciltno, tckimlikno, heskodu, notlar, dogumyeri, odano, ucret) {
    let g = new Guest();
    g.adi = adi;
    g.odaNo = odano;
    g.soyadi = soyadi;
    g.tcKimlikNo = tckimlikno;
    g.hesKodu = heskodu;
    g.ciltNo = ciltno;
    g.dogumYeri = dogumyeri;
    g.notlar = notlar;
    g.ucret = ucret;
    g.guestId = 0;

    this.guestService.addGuest(g)
      .subscribe(guest => {

        this.guests.push(g);
      });


  }

  






};






