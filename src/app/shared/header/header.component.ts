import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigate = (fe: string) => {
    if (fe === 'recipes') this.router.navigate(['recipes']);
    if (fe === 'shopping-list') this.router.navigate(['shopping-list']);
  };
}
