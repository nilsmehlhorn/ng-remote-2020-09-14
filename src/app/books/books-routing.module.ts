import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
