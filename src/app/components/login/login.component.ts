import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lc-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }
  onFacebookLoginClick() {
    this.authService.login(AuthService.providers.FACEBOOK)
    .then((user) => {
      if(user) {
        this.router.navigate(['/']);        
      }
    })
    .catch((err) => {
      // TODO: Handle errors in OAuth
    });
  }
  onGoogleLoginClick() {
    this.authService.login(AuthService.providers.GOOGLE)
    .then((user) => {
      if(user) {
        this.router.navigate(['/']);        
      }
    })
    .catch((err) => {
      // TODO: Handle errors in OAuth
    });
  }

}
