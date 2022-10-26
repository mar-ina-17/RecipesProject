import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from './../../../shared/models/shared.models';
import { AuthenticationService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  email: string = 'usr1@abv.bg';
  password: string = '1234';

  constructor(
    private auth: AuthenticationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  login() {
    const user = new User(this.email, this.password);
    console.log(user);
    this.auth.login(user);
    console.log(sessionStorage.getItem('error'));
    if (sessionStorage.getItem('error')) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: sessionStorage.getItem('error'),
      });
    }
  }
}
