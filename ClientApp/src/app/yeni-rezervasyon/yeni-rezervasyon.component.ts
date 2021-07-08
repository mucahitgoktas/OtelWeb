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

  addGuest(id: number,odano: string,adi: string,soyadi: string,ucret: string,tckimlikno: string,heskodu: string,notlar: string)
  {
    console.log(adi);
    console.log(soyadi);
    console.log(tckimlikno);
    console.log(heskodu);
    console.log(odano);
    console.log(ucret);
    console.log(notlar);

    const g = new Guest(this.guestService.getGuests().length+1,id,odano,adi,soyadi,tckimlikno,heskodu,ucret);
    this.guestService.saveGuest(g);

  }

  title="Misafir Kayıt";
  aboutT="Yeni Misafir Kaydı";

}
