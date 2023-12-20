import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Input() myUser : User = new User('', '', '', '', 0);

  onModelChange() {
    console.log('Current User data:', this.myUser);
  }
  
  constructor(private httpService: HttpService) {}

  PostAPI() {
    this.httpService.postUser(this.myUser).subscribe({
      next: (response) => {
        console.log('User created:', response);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }


}
