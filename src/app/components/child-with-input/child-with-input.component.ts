import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-with-input',
  templateUrl: './child-with-input.component.html',
  styleUrl: './child-with-input.component.css'
})
export class ChildWithInputComponent {
  value = input('default input value');
}
