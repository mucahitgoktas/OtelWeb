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

  

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    
  }

  formatsDate: string[] = [
    'dd.MM.yyyy',
    ];
  
  dateNow : Date = new Date();

    
	


}









