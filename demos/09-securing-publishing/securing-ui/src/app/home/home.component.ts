import { Component, inject } from '@angular/core';
import { IntroComponent } from '../shared/intro/intro.component';
import { FirebaseAuthService } from '../firebase-auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../environments/environment.development';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [IntroComponent, AsyncPipe],
})
export class HomeComponent {
    auth = inject(FirebaseAuthService);
    authEnabled = this.auth.isAuthenticated();
    subtitle = environment.title
    app = environment.app
}
