
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LoadingService } from '../shared/loading/loading.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    LoadingComponent
],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  destroy = inject(DestroyRef)
  ls = inject(LoadingService);
  router = inject(Router)
  route = inject(ActivatedRoute);
  isLoading = false;

  constructor() {
    this.ls.getLoading().pipe(takeUntilDestroyed(this.destroy)).subscribe((value) => {
      Promise.resolve(null).then(() => (this.isLoading = value));
    });
  }
}
