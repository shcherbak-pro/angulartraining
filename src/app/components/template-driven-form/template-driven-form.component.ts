import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  template: ` Input Text: <input type="text" [(ngModel)]="inputValue"> {{ inputValue }}`
})
export class TemplateDrivenFormComponent {
  inputValue = '';
}
