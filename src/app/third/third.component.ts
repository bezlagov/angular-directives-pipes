import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  myDate: Date = new Date(2022, 1, 24);
  upper: string = "Angular";
  lower: string = "React";
  currency: number = 1000.5;
  pi: number = 3.141592653589793238;
  percent: number = 0.5;
  
  constructor() { }

  ngOnInit(): void {
  }

}
