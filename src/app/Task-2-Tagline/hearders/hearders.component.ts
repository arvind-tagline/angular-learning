import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearders',
  templateUrl: './hearders.component.html',
  styleUrls: ['./hearders.component.scss']
})
export class HeardersComponent implements OnInit {
  public ourservice = "Our Service";
  public find = "Find the right offers for you";

  constructor() { }

  ngOnInit(): void {
  }

}
