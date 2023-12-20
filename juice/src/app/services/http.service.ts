import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postUser(userData: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', userData);
  }
}
