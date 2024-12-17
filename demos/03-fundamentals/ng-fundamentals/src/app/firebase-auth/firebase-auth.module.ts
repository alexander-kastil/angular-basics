import { NgModule } from '@angular/core';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { RegisterComponent } from './components/register/register.component';

const comps = [
  LoginComponent,
  RegisterComponent,
  CurrentUserComponent,
  LogoutBtnComponent,
];

@NgModule({
  exports: comps,
  imports: [comps],
  providers: [],
})
export class FirebaseAuthModule { }
