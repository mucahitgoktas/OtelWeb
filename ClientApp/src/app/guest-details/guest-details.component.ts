import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  @Input() guest : Guest

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }

  addGuest(id: number,odano: number,adi: string,soyadi: string,ucret: string,tckimlikno: string,heskodu: string,notlar: string)
  {
    
    const g = new Guest(id,odano,adi,soyadi,tckimlikno,heskodu,ucret,notlar);
    this.guestService.saveGuest(g);
    this.guest = null;

  }

  

  
}
