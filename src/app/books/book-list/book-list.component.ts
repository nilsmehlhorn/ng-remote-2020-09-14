import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { Book } from '../models/book';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];

  destroy = new Subject<void>();

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {
    this.bookData
      .getBooks()
      .pipe(takeUntil(this.destroy))
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
