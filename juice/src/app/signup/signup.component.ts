// import { HttpService } from '../services/http.service';

import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule , HttpClientModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Input() myUser : User = new User('', '', '', '', 0);

  onModelChange() {
    console.log('Current User data:', this.myUser);
  }
  
  constructor(private httpClient: HttpClient) {}

  PostAPI() {
    this.httpClient.post('https://jsonplaceholder.typicode.com/users', this.myUser).subscribe({
      next: (response) => {
        console.log('User created:', response);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    })
  }
  GetAPI(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
      console.log('Donnes recu', response);
    },
    error: (error) => {
      console.error('Error get', error);
    }
  })
    ;


    
  }












  // constructor(private httpService: HttpService) {}

  // PostAPI() {
  //   this.httpService.postUser(this.myUser).subscribe({
  //     next: (response) => {
  //       console.log('User created:', response);
  //     },
  //     error: (error) => {
  //       console.error('Error creating user:', error);
  //     }
  //   });
    

    //peutetre ne pas faire le service et utilisé individuellement pck ca marche p 
  }


// }
