import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addGuest(adi: string,soyadi: string, tckimlikno: number)
  {
    console.log(adi);
    console.log(soyadi);
    console.log(tckimlikno);

  }
 
}
