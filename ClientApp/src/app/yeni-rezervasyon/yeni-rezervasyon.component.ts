import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yeni-rezervasyon',
  templateUrl: './yeni-rezervasyon.component.html',
  styleUrls: ['./yeni-rezervasyon.component.css']
})
export class YeniRezervasyonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addGuest(adi: string,soyadi: string, tckimlikno: number, heskodu:string, ciltno:number, dogumyeri:string, notlar:string)
  {
    console.log(adi);
    console.log(soyadi);
    console.log(tckimlikno);
    console.log(heskodu);
    console.log(ciltno);
    console.log(dogumyeri);
    console.log(notlar);


  }

  title="Misafir Kayıt";
  aboutT="Yeni Misafir Kaydı";

}
