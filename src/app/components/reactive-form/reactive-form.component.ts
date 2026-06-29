import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  submittedValue = '';
  name = new FormControl('', { nonNullable: true });

  userForm = new FormGroup({
    email: new FormControl('test@gmail.com', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    gender: new FormControl('', { nonNullable: true, validators: Validators.required })
  });

  onSubmit(): void {
    this.submittedValue = JSON.stringify(this.userForm.getRawValue(), null, 2);
  }

  get password(): FormControl<string> {
    return this.userForm.controls.password;
  }
}
