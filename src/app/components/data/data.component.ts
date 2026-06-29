import { Component, inject } from '@angular/core';
import { JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { DataService } from '../../services/data.service';
import { ShadowDirective } from '../../directives/shadow.directive';
import { ReverseStrPipe } from '../../pipes/reverse-str.pipe';
import { Task } from '../../models/task';

@Component({
  selector: 'app-data',
  imports: [NgFor, JsonPipe, UpperCasePipe, MatCardModule, MatChipsModule, MatDividerModule, ShadowDirective, ReverseStrPipe],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  private readonly dataService = inject(DataService);

  myArr: Task[] = this.dataService.getAll();
}
