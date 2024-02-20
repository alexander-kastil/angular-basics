import { Routes } from '@angular/router';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './firebase-auth/firebase.auth.guard';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "food", component: FoodContainerComponent, canActivate: [authGuard] },
    { path: "about", component: AboutComponent }
];
