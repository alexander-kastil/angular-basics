import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseAuthModule } from './auth/fbauth.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { IntroComponent } from './shared/intro/intro.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    LoadingComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirebaseAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
