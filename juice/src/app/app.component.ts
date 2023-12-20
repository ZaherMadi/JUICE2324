import { HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TournoipresentationComponent } from './tournoipresentation/tournoipresentation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, HeaderComponent,SignupComponent,PresentationComponent,TournoipresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
//   providers: [
//     provideHttpClient(withFetch()), // Activer l'utilisation de `fetch`
//   ]
})

export class AppComponent {
  title = 'juice';
}
