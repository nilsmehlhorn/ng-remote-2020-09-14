import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  computedTitle: string;

  @Input() set myTitle(title: string) {
    this.computedTitle = '[TITLE] ' + title;
  }

  constructor() {}

  ngOnInit(): void {}
}
