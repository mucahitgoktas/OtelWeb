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

  addFatura(unvan, adres, vergiDairesi, vergiNo, not1, not2) {
    let g = new Fatura();
    g.unvan = unvan;
    g.adres = adres;
    g.vergiDairesi = vergiDairesi;
    g.vergiNo = vergiNo;
    g.not1 = not1;
    g.not2 = not2;
    g.id = 0;
    
    this.faturaService.addFaturalar(g)
      .subscribe(fatura => {
        
        this.faturalar.push(g);
      });
      debugger;

  }

}
