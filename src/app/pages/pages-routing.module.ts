import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { LoginComponent } from './login/login.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: Index1Component
  },
  {
    path: 'index-1',
    component: Index1Component
  },
  {
    path: 'index-2',
    component: Index2Component
  },
  {
    path: 'index-3',
    component: Index3Component
  },
  {
    path: 'index-4',
    component: Index4Component
  },
  {
    path: 'index-5',
    component: Index5Component
  },
  {
    path: 'index-6',
    component: Index6Component
  },
  {
    path: 'index-7',
    component: Index7Component
  },
  {
    path: 'index-8',
    component: Index8Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'password_forgot',
    component: PasswordForgotComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
