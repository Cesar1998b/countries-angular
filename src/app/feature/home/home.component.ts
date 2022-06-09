import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Country } from '../model/country.model';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const REGION_OPTIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  searchIcon = faSearch;
  filterCountry: string = '';
  regionFilter: string = '';
  regionOptions = REGION_OPTIONS;

  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe(res => {
      this.countries = res;
      console.log(this.countries);
    });
  }

}
