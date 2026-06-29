import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, JsonPipe, NgFor, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  gender: string[] = ['Male', 'Female'];
  user = {
    email: '',
    password: '',
    gender: ''
  };
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}
