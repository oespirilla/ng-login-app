import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(){
  }
  LoginWithGoogle() {
    var provider = new auth.GoogleAuthProvider();  
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    this.fAuth.auth.signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential; // The signed-in user info.
      console.log(token)
      var user = result.user;
      console.log(user)
      this.router.navigate(['/']);
    }).catch(function(error) {
        // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }
}
