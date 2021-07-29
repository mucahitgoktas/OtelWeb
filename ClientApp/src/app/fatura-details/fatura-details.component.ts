import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'app/fatura.service';
import { Fatura } from 'app/model';

@Component({
  selector: 'fatura-details',
  templateUrl: './fatura-details.component.html',
  styleUrls: ['./fatura-details.component.css']
})
export class FaturaDetailsComponent implements OnInit {

  @Input() fatura: Fatura;
  @Input() faturalar: Fatura[];

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    
  }

  editFatura(unvan, adres, vergiDairesi, vergiNo, not1, not2, id) {
    let g = new Fatura();
    this.fatura.id = g.id;
    g.unvan = unvan;
    g.adres = adres;
    g.vergiDairesi = vergiDairesi;
    g.vergiNo = vergiNo;
    g.not1 = not1;
    g.not2 = not2;
    g.id = id;




    this.faturaService.updateFatura(g)
      .subscribe(result => {
        this.faturalar.splice(this.faturalar.findIndex(x => x.id == g.id), 1, g);

      });
    location.reload();
    debugger;


  }


}
