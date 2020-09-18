import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private bookData: BookDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { isbn } = this.route.snapshot.params;
    this.book$ = this.bookData.getBook(isbn);
  }
}
