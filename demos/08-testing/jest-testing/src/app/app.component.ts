import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './shared/theme/theme.service';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleService: Title = inject(Title);
  themeService: ThemeService = inject(ThemeService);

  constructor() { }

  title: string = environment.title;
  selectedTheme: string = 'default';

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.themeService.getTheme().subscribe((t) => {
      this.selectedTheme = t;
    });
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme == 'default' ? 'dark' : 'default';
    console.log(this.selectedTheme);
  }
}
