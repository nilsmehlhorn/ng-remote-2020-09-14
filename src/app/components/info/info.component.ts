import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  info = 'Important Information';
  isHidden = false;

  constructor() {}

  ngOnInit(): void {}
}
