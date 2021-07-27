import { Component, Input, OnInit } from '@angular/core';
import { FaturaService } from 'app/fatura.service';
import { Fatura } from 'app/model';

@Component({
  selector: 'yeni-fatura',
  templateUrl: './yeni-fatura.component.html',
  styleUrls: ['./yeni-fatura.component.css']
})
export class YeniFaturaComponent implements OnInit {

  @Input() faturalar: Fatura[] = [];
  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
  }

  addFatura(adi, soyadi, ciltno, tckimlikno, heskodu, notlar, dogumyeri, odano, ucret) {
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
      debugger;

  }

}
