import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
@Input() cardInfo:any;
  constructor() { }

  ngOnInit(): void {

  }

}
