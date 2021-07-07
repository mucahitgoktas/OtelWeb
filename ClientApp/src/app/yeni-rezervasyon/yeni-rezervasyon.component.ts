import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'yeni-rezervasyon',
  templateUrl: './yeni-rezervasyon.component.html',
  styleUrls: ['./yeni-rezervasyon.component.css']
})
export class YeniRezervasyonComponent implements OnInit {

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }

  addGuest(sirano,odano,adi,soyadi,ucret,tckimlikno,heskodu,notlar)
  {
    console.log(adi);
    console.log(soyadi);
    console.log(tckimlikno);
    console.log(heskodu);
    console.log(odano);
    console.log(ucret);
    console.log(notlar);

    const g = new Guest(this.guestService.getGuests().length+1,sirano,odano,adi,soyadi,tckimlikno,heskodu,ucret);
    this.guestService.addGuest(g);

  }

  title="Misafir Kayıt";
  aboutT="Yeni Misafir Kaydı";

}
