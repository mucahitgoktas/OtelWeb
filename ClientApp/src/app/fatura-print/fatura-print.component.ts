import { TranslationWidth } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaturaService } from 'app/fatura.service';
import { Fatura } from 'app/model';




@Component({
  selector: 'fatura-print',
  templateUrl: './fatura-print.component.html',
  styleUrls: ['./fatura-print.component.css']
})
export class FaturaPrintComponent implements OnInit {

  @Input() fatura: Fatura;
  @Input() faturalar: Fatura[];
  tarih: number = Date.now();




  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {


  }

  fiyat: number;
  kdv: number;
  kdvHaric: number;
  kdvFiyat: number;
  sonuc: number;
  kdvHaricVrg: string;
  kdvFiyatVrg: string;





  kdvHesapla() {
    this.kdvHaric = this.fiyat / (1 + this.kdv / 100);
    this.kdvHaricVrg = this.kdvHaric.toFixed(4);
    this.kdvFiyat = this.fiyat - this.kdvHaric;
    this.kdvFiyatVrg = this.kdvFiyat.toFixed(4);
    this.sonuc = this.fiyat;
  }








}









