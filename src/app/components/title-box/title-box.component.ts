import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() titleClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.titleClicked.emit(`Clicked: ${this.computedTitle}`);
  }
}
