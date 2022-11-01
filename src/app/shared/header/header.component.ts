import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../store/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Recipes',
      icon: 'pi pi-fw pi-file',
      command: (click) => {
        this.router.navigate(['recipes']);
      },
    },
    {
      label: 'Shopping List',
      icon: 'pi pi-fw pi-pencil',
      command: (click) => {
        this.router.navigate(['shopping-list']);
      },
    },
  ];

  constructor(
    private router: Router,
    private _authServ: AuthenticationService
  ) {}

  ngOnInit(): void {}
  isAdmin() {
    return this._authServ.isAdmin();
  }

  isAuth() {
    return this._authServ.isAuthenticated();
  }
  logOut() {
    this._authServ.logout();
  }
}
