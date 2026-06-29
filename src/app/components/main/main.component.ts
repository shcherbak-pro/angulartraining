import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChildWithInputComponent } from '../child-with-input/child-with-input.component';
import { ChildWithOutputComponent } from '../child-with-output/child-with-output.component';

@Component({
  selector: 'app-main',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, UpperCasePipe, ChildWithInputComponent, ChildWithOutputComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  exampleParent = '';

  exampleMethodParent(value: string): void {
    this.exampleParent = value;
  }
}
