import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { MouseCursorComponent } from './components/mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoComponent,
    MouseCursorComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
