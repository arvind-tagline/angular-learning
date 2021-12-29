import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {
  public cardtext: string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  constructor() { }

  ngOnInit(): void {
  }

}
