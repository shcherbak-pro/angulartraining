import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatButtonModule, MatCardModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Angular Training Lab';

  protected readonly navItems = [
    { label: 'Main', route: '/main' },
    { label: 'Route Params', route: '/input/Serhii/36' },
    { label: 'Data & Pipes', route: '/data' },
    { label: 'Template Form', route: '/app-template-driven-form' },
    { label: 'Classic Form', route: '/form' },
    { label: 'Reactive Form', route: '/reactive' }
  ];
}
