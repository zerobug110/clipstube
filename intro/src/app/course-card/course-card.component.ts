import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { blogs, IBlogPost } from '../../db-data';
@Component({
  selector: 'course-card',
  imports: [NgIf],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input()
  title!: string;
  isDisable: boolean = false;
  imageUrl: string =
    'https://camo.githubusercontent.com/5b1159c7cc9e455e647f30dfdce5a3ba3001f6ef0053c4efa8b3b24890389acd/68747470733a2f2f64337669676d70686164626e39622e636c6f756466726f6e742e6e65742f636f757273652d696d616765732f6c617267652d696d616765732f616e67756c61722d636f72652d646565702d646976652d6e65772d322e6a7067';

  counter: number = 0;
  incrementCounter() {
    this.counter++;
  }

  isLoggedIn: boolean = true;

  blogList: IBlogPost[] = blogs;
}
