// src/app/app.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  currentLang: string = 'nl'; // Default language

  constructor(private translate: TranslateService) {
    // Add available languages
    this.translate.addLangs(['en', 'nl']);

    // Get browser language
    const browserLang = this.translate.getBrowserLang();

    // Validate and set currentLang
    if (browserLang && ['en', 'nl'].includes(browserLang)) {
      this.currentLang = browserLang;
    } else {
      this.currentLang = 'nl'; // Fallback language
    }

    // Use the selected language
    this.translate.use(this.currentLang);
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  navigate(link: string) {
    window.open(link, '_blank');
  }
}
