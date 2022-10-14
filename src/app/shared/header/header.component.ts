import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Data } from 'src/app/shared/models/shared.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dataOptions: Data[] = [
    { name: 'Save Data', code: 'NY' },
    { name: 'Fetch Data', code: 'RM' },
  ];
  selectedOption: Data;

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
