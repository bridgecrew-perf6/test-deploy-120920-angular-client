import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username = '';
  password = '';
  isLoggedIn = true;

  profile = {};

  login = async (username, password ) => {
    await this.service.login(username, password)
      .then(actualUser => {
        window.alert('Login | actualUser:' + JSON.stringify(actualUser));
        window.alert('Login | actualUser.errorMessage' + actualUser.errorMessage);
        if (actualUser.errorMessage === undefined) {
          this.router.navigate(['/profile']);
        } else {
          window.alert(actualUser.errorMessage);
        }
      });
    // await this.service.profile()
    //       .then(profile => this.profile = profile );
    // window.alert('LOGIN -- profile (*session retrieval) * |  : ' + this.profile);

  }


  ngOnInit(): void {
  }

}
