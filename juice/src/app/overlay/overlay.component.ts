import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {
  yourClickFunction() {
    console.log('Button clicked!');
  }
}
