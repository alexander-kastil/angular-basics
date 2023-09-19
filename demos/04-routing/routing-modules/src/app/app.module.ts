import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './skills/skills.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './customers/state/customers.effects';
import { metaReducers, reducers } from './state';
import { CommonModule } from '@angular/common';
import { CustomerEditComponent } from './customers/component/customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/component/customer-list/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdminComponent,
    CustomerEditComponent,
    CustomersComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    SkillsModule,
    FormsModule,
    AdminModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CustomerEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
