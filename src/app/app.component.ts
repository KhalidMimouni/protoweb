import { Component } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fadeInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'protowebsite';
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
}
