import { Component } from '@angular/core';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SidemenuComponent,
    FoodContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Food App';
}
