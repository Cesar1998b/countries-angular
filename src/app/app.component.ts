import { Component } from '@angular/core';
import { ThemeModeService, Theme } from './shared/services/theme-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: Observable<Theme>;
  theme: string = '';

  constructor(private themeService: ThemeModeService) {}
  ngOnInit() {
    this.theme$ = this.themeService.mode$;
    this.theme$.subscribe(res => {
      this.theme = res;
    })
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }
}
