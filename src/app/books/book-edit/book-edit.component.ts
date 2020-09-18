import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
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
