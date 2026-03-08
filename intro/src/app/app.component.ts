import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { blogs, IBlogPost } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgFor,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';

import { DataService } from './service/data.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CourseCardComponent,
    NgFor,
    // DatePip e,
    // CurrencyPipe,
    // LowerCasePipe,
    // UpperCasePipe,
    // PercentPipe,
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular core';
  today: number = Date.now();
  blogList: IBlogPost[] = blogs;

  data: string[] = [];

  constructor(private DataService: DataService) {
    this.data = this.DataService.getData();
  }
}
