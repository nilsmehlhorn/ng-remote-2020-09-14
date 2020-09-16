import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {
    this.bookData.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
