import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { loginError } from 'src/app/shared/models/messages';
import { AuthenticationService } from 'src/app/store/auth/auth.service';
import { User } from './../../../shared/models/shared.models';
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
    this._sessionStorageService.clearAllSessionStorage();

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
    this.auth.postMethod(user, 'login');

    if (this._sessionStorageService.loadError()) {
      this.messageService.add(loginError);
    }
  }
}
