import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'app/fatura.service';
import { Fatura } from 'app/model';


@Component({
  selector: 'app-fatura-print',
  templateUrl: './fatura-print.component.html',
  styleUrls: ['./fatura-print.component.css']
})
export class FaturaPrintComponent implements OnInit {

  faturalar: Fatura[] = [];

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    
  }

  printPage() {
    window.print();
  }

}
