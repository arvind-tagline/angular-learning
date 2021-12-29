import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  public python: string = "https://taglineinfotech.com/wp-content/uploads/2021/08/python-logo-img3.png";
  constructor() { }

  ngOnInit(): void {
  }

}
