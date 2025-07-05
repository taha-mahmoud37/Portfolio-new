import { LanguageService } from './../services/language.service';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  languageService = inject(LanguageService);

  get lang() {
    return this.languageService.currentLang;
  }
}
