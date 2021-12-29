import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() cardtext: string = "";
  @Input() subcardtxt: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
