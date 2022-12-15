import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() btnName = 'ClickMe'
  @Input() color = false;
  isOn = false;
  clicked() { this.color = !this.color; }
  message() { return `The Colour is `; }
}
