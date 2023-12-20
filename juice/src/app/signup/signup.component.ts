import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
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
  

  PostAPI() {
    console.log("PostAPI")
  }


}
