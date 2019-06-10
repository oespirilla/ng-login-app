import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule} from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { environment } from '../../environments/environment';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginModule } from '../login/login.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    LoginModule,
  ],
  exports: [],
  providers: [AngularFireAuthGuard],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
