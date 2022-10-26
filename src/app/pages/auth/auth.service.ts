import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/shared.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:3000/';

  isAuthenticated(): boolean {
    return JSON.parse(sessionStorage.getItem('currentUser')).accessToken != ''
      ? true
      : false;
  }

  login(usr) {
    this.http.post(this.url + 'login', usr).subscribe(
      (res) => {
        sessionStorage.setItem('currentUser', JSON.stringify(res));
        //sessionStorage.setItem('accessToken', JSON.stringify(JSON.parse(res).accessToken));
        this.router.navigateByUrl('/recipes');
      },
      (err) => {
        sessionStorage.setItem('currentUser', JSON.stringify(new User()));
        sessionStorage.setItem(
          'error',
          'Login failed - invalid username or password, status code: ' +
            err.status
        );
      }
    );
  }
}
