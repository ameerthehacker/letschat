import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lc-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public loadingUser: boolean = false;

  public authProviders = AuthService.providers;

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.loadingUser = true;
    this.authService.user
    .subscribe((user) => {
      this.loadingUser = false;
    });
  }
  onBtnLoginClick(provider) {
    this.authService.login(provider)
    .then((user) => {
      if(user) {
        this.router.navigate(['/threads']);        
      }
    })
    .catch((err) => {
      // TODO: Handle errors in OAuth
    });
  }

}
