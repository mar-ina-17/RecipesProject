import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

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

  constructor(private router: Router) {}
  ngOnInit(): void {}
}
