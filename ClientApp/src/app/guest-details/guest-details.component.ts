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

  addGuest(id: number,odano: number,adi: string,soyadi: string,ucret: string,tckimlikno: string,heskodu: string,notlar: string,DogumYeri: string)
  {
    
    //let g = new Guest(id,odano,adi,soyadi,tckimlikno,heskodu,ucret,notlar,DogumYeri);
    //this.guestService.saveGuest(g);
    //this.guest = null;

  }

  /*
  this.GuestId = id;
        this.Ucret = ucret;
        this.OdaNo = odano;
        this.Adi = adi;
        this.Soyadi = soyadi;
        this.TcKimlikNo = tckimlikno;
        this.HesKodu = hesKodu;
        this.CiltNo = ciltno;
        this.DogumYeri = dogumyeri;
        this.Notlar = notlar;
  */

  

  
}
