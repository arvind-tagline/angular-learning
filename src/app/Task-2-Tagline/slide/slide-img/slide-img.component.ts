import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-img',
  templateUrl: './slide-img.component.html',
  styleUrls: ['./slide-img.component.scss']
})
export class SlideImgComponent implements OnInit {
  public slideimg: string = "https://taglineinfotech.com/wp-content/uploads/2021/12/care-clinic-screen-case-1-min.png";
  constructor() { }

  ngOnInit(): void {
  }

}
