import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  name = new FormControl('');

  userForm = new FormGroup({
    email: new FormControl('test@gmail.com', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    gender: new FormControl('', { nonNullable: true })
  });

  onSubmit(): void {
    console.warn(this.userForm.getRawValue());
  }

  get password(): FormControl<string> {
    return this.userForm.controls.password;
  }
}
