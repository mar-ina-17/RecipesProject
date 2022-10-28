import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from './../../../shared/models/shared.models';
import { AuthenticationService } from './../auth.service';
import { SessionStorageService } from './../store/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private messageService: MessageService,
    private _sessionStorageService: SessionStorageService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: new FormControl(
        { value: 'usr1@abv.bg', disabled: false },
        Validators.required
      ),
      password: new FormControl(
        { value: '1234', disabled: false },
        Validators.required
      ),
    });
  }

  login() {
    const { email, password } = this.form.value;
    const user = new User(email, password);
    this.auth.login(user);

    if (sessionStorage.getItem('error')) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: sessionStorage.getItem('error'),
      });
    }
  }
}
