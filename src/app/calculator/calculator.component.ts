import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  @Input() btnName = 'Subtraction of two numbers'
  @Input() flag: any;
  @Input() aValue: number = 0;
  @Input() bValue: number = 0;
  result: number = 0;

  resultanswer() {
    if(this.flag === true) {
      this.result = this.aValue * this.bValue;
    } else if (this.flag === false) {
      this.result = this.aValue + this.bValue;
    } else {
      this.result = this.aValue - this.bValue;
    }
  }
}
