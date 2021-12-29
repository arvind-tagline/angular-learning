import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() clntimg: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
