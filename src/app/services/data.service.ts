import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAll(): Task[] {
    return [
      { title: 'My task 1', desc: 'My task description' },
      { title: 'My task 2', desc: 'My task description' },
      { title: 'My task 3', desc: 'My task description' }
    ];
  }
}
