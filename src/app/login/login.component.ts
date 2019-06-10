import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fAuth: AngularFireAuth) {}

  ngOnInit(){
  }
  LoginWithGoogle() {
    var provider = new auth.GoogleAuthProvider();  
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    this.fAuth.auth.signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential; // The signed-in user info.
      console.log(token)
      var user = result.user;
      console.log(user)
      // ...
    }).catch(function(error) {
        // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }
}
