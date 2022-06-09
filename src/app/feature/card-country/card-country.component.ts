import { Country } from './../model/country.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {

  @Input() country: Country | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
