import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  public choose = "Don't know what to choose? Drop us a line.";
  public dash = "-------------------------------------------------------------------------";
  constructor() { }

  ngOnInit(): void {
  }

}
