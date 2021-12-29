import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements AfterViewInit {

  title = 'calculator';
  public outputScr: any;
  ngAfterViewInit(): void {
    this.outputScr = document.getElementById('output');
  }

  public keyv(num: any) {
    this.outputScr['value'] = this.outputScr['value'] + num;
  }

  public calculate() {
    try {
      this.outputScr['value'] = eval(this.outputScr['value']);
    }
    catch (err) {
      alert("Invalid input")
    }
  }

  public clear() {
    this.outputScr['value'] = "";
  }

  public del() {
    this.outputScr['value'] = this.outputScr.value.slice(0, -1);
  }

  public sqr() {
    this.outputScr['value'] = Math.sqrt(this.outputScr['value']);
  }

  public pow() {
    this.outputScr['value'] = Math.pow(this.outputScr['value'], 2);
  }

}
