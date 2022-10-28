import { Injectable } from '@angular/core';
import { sessionData } from './../../../shared/models/shared.models';
import { SessionStorageServiceRef } from './session-storage-ref.service';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  private _sessionStorage: Storage;
  constructor(private _sessionStorageRef: SessionStorageServiceRef) {
    this._sessionStorage = this._sessionStorageRef.sessionStorage;
  }
  setInfo(data: sessionData) {
    const jsonUser = JSON.stringify(data);
    this._sessionStorage.setItem('userData', jsonUser);
  }
  logError(status: number, text: string) {}

  loadInfo() {
    this._sessionStorage.getItem('userData');
  }

  clearInfo() {
    this._sessionStorage.removeItem('userData');
  }

  clearAllSessionStorage() {
    this._sessionStorage.clear();
  }
}
