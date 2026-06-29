import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShadowDirective } from '../../directives/shadow.directive';

@Component({
  selector: 'app-input',
  imports: [ShadowDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  private readonly route = inject(ActivatedRoute);

  name = this.route.snapshot.paramMap.get('name') ?? 'Serhii';
  age = Number(this.route.snapshot.paramMap.get('age') ?? 36);
}
