import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() output = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  navigate = (fe: string) => {
    this.output.emit(fe);
  };
}
