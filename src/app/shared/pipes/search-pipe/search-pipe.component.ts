import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultCountries = [];
    for (const country of value) {
      if (country.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCountries.push(country);
      };
    }
    return resultCountries;
  }

}
