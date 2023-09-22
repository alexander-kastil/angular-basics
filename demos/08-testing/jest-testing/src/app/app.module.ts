import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MarkdownModule } from 'ngx-markdown';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IntroComponent } from './shared/intro/intro.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
        }),
        NavbarComponent,
        IntroComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
