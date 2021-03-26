import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Index1Component } from './index1/index1.component';
import { PagesRoutingModule } from './pages-routing.module';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [Index1Component, Index2Component, Index3Component, Index4Component, Index5Component, Index6Component, Index7Component, Index8Component, LoginComponent, SignupComponent, PasswordForgotComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    NgxYoutubePlayerModule.forRoot(),
    ScrollToModule.forRoot(),
  ]
})
export class PagesModule { }
