import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationService, IAuthenticationService } from './authentication.service';
import { IApiService } from 'src/app/core/services/api.service';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  providers: [
    {
      provide: IAuthenticationService,
      useClass: AuthenticationService,
      deps: [IApiService]
    }
  ]
})
export class AuthenticationModule { }
