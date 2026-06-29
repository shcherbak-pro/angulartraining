import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child-with-output',
  templateUrl: './child-with-output.component.html',
  styleUrl: './child-with-output.component.css'
})
export class ChildWithOutputComponent {
  exampleChild = 'Hello';
  exampleOutput = output<string>();

  exampleMethodChild(): void {
    this.exampleOutput.emit(this.exampleChild);
  }
}
