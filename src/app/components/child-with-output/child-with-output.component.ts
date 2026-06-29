import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child-with-output',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './child-with-output.component.html',
  styleUrl: './child-with-output.component.css'
})
export class ChildWithOutputComponent {
  exampleChild = 'Hello from child component';
  exampleOutput = output<string>();

  exampleMethodChild(): void {
    this.exampleOutput.emit(this.exampleChild);
  }
}
