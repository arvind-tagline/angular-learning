import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cards = ['1', '2', '3', '4', '5', '6'];
  public technologys = ['1', '2', '3', '4', '5', '6', '7', '8'];
}
