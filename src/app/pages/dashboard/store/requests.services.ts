import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/requests';

  getRequests() {
    return this.http.get(this.url);
  }

  addRequest(request) {
    return this.http.post(this.url, request);
  }

  deleteRequest(id) {
    return this.http.delete(this.url + '/' + id + '/', id);
  }
}
