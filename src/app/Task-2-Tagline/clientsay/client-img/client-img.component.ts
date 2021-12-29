import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-img',
  templateUrl: './client-img.component.html',
  styleUrls: ['./client-img.component.scss']
})
export class ClientImgComponent implements OnInit {
  public clientimg: string = "https://c1.wallpaperflare.com/preview/510/217/278/technology-business-computer-designer.jpg";

  constructor() { }

  ngOnInit(): void { }

}
