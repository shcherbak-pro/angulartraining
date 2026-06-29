import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child-with-input',
  imports: [MatCardModule],
  templateUrl: './child-with-input.component.html',
  styleUrl: './child-with-input.component.css'
})
export class ChildWithInputComponent {
  value = input('default input value');
}
