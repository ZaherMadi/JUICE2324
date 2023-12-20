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
    this.httpService.postUser(this.myUser).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
      },
      error => {
        console.error('Erreur lors de la requête POST :', error);
      }
    );
  }



