import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import {
  ThemeModeService,
  Theme,
} from './../../../shared/services/theme-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  moon = faMoon;
  sun = faSun;
  theme$: Observable<Theme>;
  theme: string = '';
  dark: boolean = false;

  constructor(private themeService: ThemeModeService) {}

  ngOnInit(): void {
    this.theme$ = this.themeService.mode$;
    this.theme$.subscribe((res) => {
      this.theme = res;
    });
  }

  toggleTheme() {
    this.dark = this.theme === 'dark' ? true : false;
    this.themeService.toggleMode();
  }
}
