import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  public slide: string = "Care Clinic";
  public text: string = "Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline Infotech provides the best services to the clients, and it is reflected through our ratings and reviews on various platforms.";
  public text1: string = "We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback and stories about partnering with us before making your own decision.";
  constructor() { }

  ngOnInit(): void {
  }

}
