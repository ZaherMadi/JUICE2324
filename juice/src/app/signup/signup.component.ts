// import { HttpService } from '../services/http.service';

import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Input() myUser: User = new User('', '', '', '', 0);
  email = new FormControl('', [Validators.required, Validators.email]);
  onModelChange() {
    console.log('Current User data:', this.myUser);
  }

  constructor(private httpClient: HttpClient) {}

  PostAPI() {
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/users', this.myUser)
      .subscribe({
        next: (response) => {
          console.log('User created:', response);
        },
        error: (error) => {
          console.error('Error creating user:', error);
        },
      });
  }
  GetAPI() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (response) => {
          console.log('Donnes recu', response);
        },
        error: (error) => {
          console.error('Error get', error);
        },
      });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // constructor(private httpService: HttpService) {}

}

