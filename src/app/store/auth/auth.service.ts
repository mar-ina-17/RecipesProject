import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/pages/auth/store/session-storage.service';
import { sessionData } from 'src/app/shared/models/shared.models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isUserLoggedIn: boolean = false;
  public currentUserRole: string;
  public currentUserName: string;
  constructor(
    private http: HttpClient,
    private router: Router,

    private _sesionStorageService: SessionStorageService
  ) {}

  url = 'http://localhost:3000/';

  isAuthenticated(): boolean {
    return this.isUserLoggedIn;
  }
  isAdmin(): boolean {
    return this.currentUserRole === 'admin';
  }

  postMethod(usr, location) {
    this.http.post(this.url + location, usr).subscribe(
      (res: sessionData) => {
        this.isUserLoggedIn = true;
        this.currentUserRole = res.user.role;
        this.currentUserName = res.user.email;
        this._sesionStorageService.setInfo(res);
        this.router.navigateByUrl('/recipes');
      },
      (err) => {
        this.isUserLoggedIn = false;
        this.currentUserRole = null;
        this._sesionStorageService.setError(err.status, err.statusText);
      }
    );
  }

  logout() {
    this._sesionStorageService.clearAllSessionStorage();
    this.isUserLoggedIn = false;
    this.currentUserRole = null;
    this.currentUserName = null;

    this.router.navigateByUrl('/login');
  }
}
