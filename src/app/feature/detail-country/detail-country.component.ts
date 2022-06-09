import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Country, Currency, Language } from '../model/country.model';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss'],
})
export class DetailCountryComponent implements OnInit {

  country: Observable<Country>;
  borderCountries: Observable<Country[]>;
  leftIcon = faArrowLeft;

  constructor(private service: CountryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.country);
      this.country = this.service.getCountryByName(params.country).pipe(
        tap((res) => res),
        mergeMap((res) => {
          console.log(res);
          if(res.borders){
            this.borderCountries = this.service.getCountryByCodes(res.borders.slice(0,3));
          }
          return of(res);
        })
      );
    });
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }
}
