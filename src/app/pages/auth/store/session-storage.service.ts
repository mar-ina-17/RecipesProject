import { Injectable } from '@angular/core';
import { sessionData } from './../../../shared/models/shared.models';
import { SessionStorageServiceRef } from './session-storage-ref.service';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  private _sessionStorage: Storage;
  private accessToken: string;
  constructor(private _sessionStorageRef: SessionStorageServiceRef) {
    this._sessionStorage = this._sessionStorageRef.sessionStorage;
  }

  setInfo(data: sessionData) {
    const jsonUser = JSON.stringify(data);
    this._sessionStorage.setItem('userData', jsonUser);
    this._sessionStorage.setItem('accessToken', data.accessToken);
  }

  setError(status: number, text: string) {
    const err = JSON.stringify({ status: status, text: text });
    this._sessionStorage.setItem('error', err);
  }
  loadToken() {
    return this._sessionStorage.getItem('accessToken');
  }
  loadName() {
    return JSON.parse(this._sessionStorage.getItem('userData')).user.name
      ? JSON.parse(this._sessionStorage.getItem('userData')).user.name
      : '';
  }

  loadError() {
    return this._sessionStorage.getItem('error');
  }

  clearInfo() {
    this._sessionStorage.removeItem('userData');
  }

  clearError() {
    return this._sessionStorage.removeItem('error');
  }

  clearAllSessionStorage() {
    this._sessionStorage.clear();
  }
}
