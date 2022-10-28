import { Injectable } from '@angular/core';
import { TokenGenerator } from 'ts-token-generator';
import { LocalStorageServiceRef } from './local-storage-ref.service';

@Injectable()
export class LocalStorageService {
  private _localStorage: Storage;
  private token: string;
  constructor(
    private _localStorageRef: LocalStorageServiceRef,
    private tokenGen: TokenGenerator
  ) {
    this._localStorage = this._localStorageRef.localStorage;
  }
  setToken() {
    this.token = this.tokenGen.generate();
  }

  clearToken() {
    this.token = '';
  }
  loadToken() {
    return this.token;
  }

  setInfo(token: string) {
    this._localStorage.setItem('refreshToken', token);
  }
  logError(status: number, text: string) {}

  loadInfo() {
    this._localStorage.getItem('refreshToken');
  }

  clearInfo() {
    this._localStorage.removeItem('refreshToken');
  }

  clearAllLocalStorage() {
    this._localStorage.clear();
  }
}
