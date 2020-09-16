import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from '../services/window.provider';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit(): void {
  }

}
