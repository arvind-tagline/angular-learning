import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-img',
  templateUrl: './client-img.component.html',
  styleUrls: ['./client-img.component.scss']
})
export class ClientImgComponent implements OnInit {
  public clientimg: string = "https://png.pngitem.com/pimgs/s/273-2730577_transparent-people-group-png-people-group-vector-transparent.png";
  constructor() { }

  ngOnInit(): void {
  }

}
