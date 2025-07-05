import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-changelang',
  standalone: true,
  imports: [],
  templateUrl: './changelang.component.html',
  styleUrl: './changelang.component.scss',
})
export class ChangelangComponent {
  constructor(private languageService: LanguageService) {}
  toggleLanguage() {
    const lang = this.languageService.currentLang === 'en' ? 'ar' : 'en';
    this.languageService.changeLanguage(lang);
  }

  get currentLanguage() {
    return this.languageService.currentLang;
  }
}
