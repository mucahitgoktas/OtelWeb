import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'app/model';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  @Input() guest : Guest

  constructor() { }

  ngOnInit(): void {
  }

}
