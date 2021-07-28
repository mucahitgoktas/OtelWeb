import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'app/fatura.service';
import { Fatura } from 'app/model';

@Component({
  selector: 'fatura-list',
  templateUrl: './fatura-list.component.html',
  styleUrls: ['./fatura-list.component.css']
})
export class FaturaListComponent implements OnInit {

  selectedFatura: Fatura;
  faturalar: Fatura[];

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    this.getFaturalar();
  }


  getFaturalar() {
    this.faturaService.getFaturalar().subscribe(faturalar => {
      this.faturalar = faturalar

    });
  }

  title = 'Fatura Listesi'

  onSelectFatuara(fatura: Fatura) {

    this.selectedFatura = fatura;
  }

  deleteFatura(fatura: Fatura) {
    this.faturaService.deleteFatura(fatura).subscribe(g => {
      this.getFaturalar();
    });

  }

}
