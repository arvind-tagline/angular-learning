import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  styleUrls: ['./title2.component.scss']
})
export class Title2Component implements OnInit {
  public header: string = "We have the experience";
  public p: string = "We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ client worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100 % client satisfaction.We also have 60K + hours of freelancing experience.";
  constructor() { }

  ngOnInit(): void {
  }

}
