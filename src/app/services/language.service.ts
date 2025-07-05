import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  defaultLang = 'en';
  languages = [
    {
      name: 'English',
      key: 'en',
    },
    {
      name: 'Arabic',
      key: 'ar',
    },
  ];
  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  init() {
    const lang = localStorage.getItem('lang');
    this.setLang(lang ? lang : this.defaultLang);
  }
  setLang(lang: string) {
    const language: string = lang || this.defaultLang;
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    const oppositeDirection = language === 'en' ? 'ltr' : 'rtl';
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
    this.translateService.defaultLang = language;
    this.document.documentElement.lang = language;
    this.document.documentElement.dir = direction;
    this.document.body.dir = direction;
    this.document.body.lang = language;
    this.document.body.classList.remove(oppositeDirection);
    this.document.body.classList.add(direction);
    this.saveLang(language);
  }
  saveLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }
  get currentLang() {
    return this.translateService.currentLang;
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.setLang(lang);
    this.document.location.reload();
  }
}
