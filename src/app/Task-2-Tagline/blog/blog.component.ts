import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blogtitle: string = "";
  @Input() blogsubtitle: string = "";
  @Input() blogfooter: string = "";
  @Input() blogimage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
