import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            AppRoutingModule,
            MatSnackBarModule,
            MarkdownModule.forRoot({
                loader: HttpClient,
            })
        ),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
    .catch(err => console.error(err));
