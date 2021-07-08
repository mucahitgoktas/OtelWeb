import { Component, Input, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Guest } from 'app/model';

@Component({
  selector: 'guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.css']
})
export class GuestEditComponent implements OnInit {
  @Input() guest : Guest

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }

}
