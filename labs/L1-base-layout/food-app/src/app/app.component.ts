import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    NavbarComponent,
    SidemenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Food App';
}
