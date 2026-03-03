import { Component, Input, OnInit } from '@angular/core';
import { IBlogPost } from '../../db-data';
// import { Blog } from '../../db-data';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  blog!: IBlogPost;
  constructor() {}

  ngOnInit() {}
}
