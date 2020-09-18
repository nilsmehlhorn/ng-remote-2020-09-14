import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { MouseCursorComponent } from './components/mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';

import { WINDOW, getWindow } from './books/services/window.provider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoComponent,
    MouseCursorComponent,
    TitleBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: WINDOW, useFactory: getWindow }],
  bootstrap: [AppComponent],
})
export class AppModule {}
