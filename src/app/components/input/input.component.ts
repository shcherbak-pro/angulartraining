import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ShadowDirective } from '../../directives/shadow.directive';

@Component({
  selector: 'app-input',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatDividerModule, ShadowDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  private readonly route = inject(ActivatedRoute);

  name = this.route.snapshot.paramMap.get('name') ?? 'Serhii';
  age = Number(this.route.snapshot.paramMap.get('age') ?? 36);
}
