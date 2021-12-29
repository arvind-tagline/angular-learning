import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientsay',
  templateUrl: './clientsay.component.html',
  styleUrls: ['./clientsay.component.scss']
})
export class ClientsayComponent implements OnInit {
  public clientsay: string = "What's Our Client Say";
  constructor() { }

  ngOnInit(): void {
  }

}
