import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { sessionData } from './../../shared/models/shared.models';
import { LocalStorageService } from './store/local-storage.service';
import { SessionStorageService } from './store/session-storage.service';

@Inject([SessionStorageService, LocalStorageService])
@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private _sesionStorageService: SessionStorageService,
    private _localStorageService: LocalStorageService
  ) {}

  url = 'http://localhost:3000/';

  isAuthenticated(): boolean {
    console.log('loaded: ', this._localStorageService.loadToken());
    return false;
  }

  login(usr) {
    this.http.post(this.url + 'login', usr).subscribe(
      (res: sessionData) => {
        this._sesionStorageService.setInfo(res);
        this.router.navigateByUrl('/recipes');
        this._localStorageService.setToken();
      },
      (err) => {
        console.log(err);
        this._sesionStorageService.clearAllSessionStorage();
      }
    );
  }
}
