import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then(({ BooksModule }) => BooksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then(({ AboutModule }) => AboutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
