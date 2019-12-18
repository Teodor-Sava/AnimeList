import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService, IApiService } from './services/api.service';
import { HeaderComponent } from './components/header/header.component';
import { IAuthenticationStateService, AuthenticationStateService } from './services/authentication-state.service';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HttpClientModule, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: IApiService,
      useClass: ApiService
    },
    {
      provide: IAuthenticationStateService,
      useClass: AuthenticationStateService
    }
  ]
})
export class CoreModule { }
