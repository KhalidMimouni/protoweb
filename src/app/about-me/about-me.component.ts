import { Component } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  faTwitter = faTwitter
  faLinkedin = faLinkedin
  faEnvelope = faEnvelope
}
