import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToContacts = () => redirectLoggedInTo(['/']);



const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'contacts', 
        loadChildren: '../contacts/contacts.module#ContactsModule', 
        canActivate: [AngularFireAuthGuard], 
        data: { 
          authGuardPipe: redirectUnauthorizedToLogin 
        } 
      },
    ]
  },
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { 
      authGuardPipe: redirectLoggedInToContacts 
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class HomeRoutingModule { }
