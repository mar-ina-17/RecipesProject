import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/shared.models';
import { AuthenticationService } from 'src/app/store/auth/auth.service';
import { SessionStorageService } from '../store/session-storage.service';
import { registerError } from './../../../shared/models/messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private auth: AuthenticationService,
    private _sessionStorageService: SessionStorageService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: new FormControl({ value: '', disabled: false }),
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
  register() {
    const { name, email, password } = this.form.value;
    const user = new User(email, password, name);
    this.auth.postMethod(user, 'register');
    if (this._sessionStorageService.loadError()) {
      this.messageService.add(registerError);
    }
  }
}
