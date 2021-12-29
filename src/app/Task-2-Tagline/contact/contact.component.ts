import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact = "Let’s grow smarter with the smartest Web Development Company. Get a Free Quote";
  constructor() { }

  ngOnInit(): void {
  }

}
