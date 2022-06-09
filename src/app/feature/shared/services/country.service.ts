import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../model/country.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  getAllCountries(){
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountryByCodes(codes: string[]) {
    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(',')}`
    );
  }
}
