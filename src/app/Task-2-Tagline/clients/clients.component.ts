import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public client: string = "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-6.png";
  constructor() { }

  ngOnInit(): void {
  }

}
