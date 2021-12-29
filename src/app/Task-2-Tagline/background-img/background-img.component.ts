import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-img',
  templateUrl: './background-img.component.html',
  styleUrls: ['./background-img.component.scss']
})
export class BackgroundImgComponent implements OnInit {

  public frontimg: string = "https://taglineinfotech.com/wp-content/uploads/2021/09/main-header-bg.webp";
  constructor() { }

  ngOnInit(): void {
  }
}
