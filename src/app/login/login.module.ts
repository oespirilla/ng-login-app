import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule} from './login-routing.module';
import { MaterialModule } from '../material/material.module';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    AngularFireAuthModule,
  ],
  exports: [],
  providers: [AngularFireAuthGuard],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
