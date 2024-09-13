import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './demos/samples/form/form.component';
import { ModalComponent } from './demos/samples/modal/modal.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        FormComponent,
        ModalComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
