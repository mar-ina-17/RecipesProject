import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    console.log(this.auth.currentUserRole);
    if (!this.auth.isAdmin()) {
      this.router.navigate(['/recipes']);
      return false;
    }
    return true;
  }
}
