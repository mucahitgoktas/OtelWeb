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
  tarih : number = Date.now();
  

  

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {

       
  }

  


    
	


}









