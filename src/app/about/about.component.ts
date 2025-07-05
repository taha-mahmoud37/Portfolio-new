import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  get currentLanguage() {
    return this.languageService.currentLang;
  }
  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}
  goToWork() {
    this.router.navigate(['/projects']);
  }
}
