import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  color = {
    color: "black"
  };
  data = "true";

  constructor() { }

  ngOnInit(): void {
  }

  onSelectToggle(style: string): void {
    this.color.color = style;
  }
}
