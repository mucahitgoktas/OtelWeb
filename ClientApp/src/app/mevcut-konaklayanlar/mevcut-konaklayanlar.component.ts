import { Component, OnInit } from '@angular/core';
import { Model } from 'app/Model';

@Component({
  selector: 'mevcut-konaklayanlar',
  templateUrl: './mevcut-konaklayanlar.component.html',
  styleUrls: ['./mevcut-konaklayanlar.component.css']
})
export class MevcutKonaklayanlarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Mevcut Konaklayanlar'
  model = new Model();

  getCategoryName(){
    return this.model.categoryName;
  }

  getGuests(){
    return this.model.guests;
  }




   
  

}
