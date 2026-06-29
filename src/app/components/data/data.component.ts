import { Component, inject } from '@angular/core';
import { JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ShadowDirective } from '../../directives/shadow.directive';
import { ReverseStrPipe } from '../../pipes/reverse-str.pipe';
import { Task } from '../../models/task';

@Component({
  selector: 'app-data',
  imports: [NgFor, JsonPipe, UpperCasePipe, ShadowDirective, ReverseStrPipe],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  private readonly dataService = inject(DataService);

  myArr: Task[] = this.dataService.getAll();
}
