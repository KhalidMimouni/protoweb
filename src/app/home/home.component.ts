// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

interface Publication {
  title: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  publications: Publication[] = [
    { title: "‘Het initiatief uit handen’", summary: 'Artikel over het buitensluiten van lokale partijen', link: 'http://www.vanostaaijen.nl/wp-content/uploads/2012/10/2023-Het-initiatief-uit-handen-BW.pdf' },
    { title: 'Opiniebijdrag Binnenlands Bestuur', summary: 'Lees hier mijn maandelijkse opiniebijdrage voor Binnenlands Bestuur', link: 'https://www.binnenlandsbestuur.nl/user/88697' },
    { title: 'Artikel', summary: 'Een nieuw framework voor urban governance onderzoek', link: 'https://pure.uvt.nl/ws/portalfiles/portal/75139895/van-ostaaijen-2023-agendas-coalitions-resources-and-schemes-of-cooperation-using-the-urban-regime-framework-to-study_1_.pdf' },
    { title: 'Onderzoeksessay', summary: 'uitdagingen rondom lokaal veiligheidsbeleid in 2030', link: 'https://pure.uvt.nl/ws/portalfiles/portal/62426049/Lokaal_Veiligheidsbeleid_in_2030.pdf' },
    { title: 'Online minicolleges', summary: 'Youtube videos over lokale partijen en lokaal bestuur in Vlaanderen en Nederland', link: 'https://www.youtube.com/watch?v=MkEPnavwv6w' },
    { title: 'Boek', summary: 'Lokale democratie doorgelicht (2022)', link: 'https://www.boom.nl/product/100-11665_Lokale-democratie-doorgelicht' },
    { title: 'Bundel', summary: 'Lokale partijen in de praktijk', link: '/pub2' },
    { title: 'Website', summary: 'Minister voor een dag', link: 'https://prinsjesdag.jongondernemen.nl/' }
  ];

  currentLang: string = 'nl'; // Default language

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });

    // Initialize currentLang based on TranslateService
    this.currentLang = this.translate.currentLang || 'nl';
  }

  navigate(link: string): void {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      this.router.navigateByUrl(link);
    }
  }
}
