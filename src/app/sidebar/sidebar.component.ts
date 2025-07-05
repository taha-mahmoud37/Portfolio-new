import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { ChangelangComponent } from '../changelang/changelang.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TranslatePipe, RouterLink, ChangelangComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('navbar') navbar!: ElementRef<HTMLDivElement>;
  constructor(private languageService: LanguageService) {}

  get currentLanguage() {
    return this.languageService.currentLang;
  }

  showNav() {
    console.log('showNav called', this.navbar);
    this.navbar.nativeElement.classList.add('show');
  }
  hideNav(navbar: HTMLDivElement) {
    if (navbar) {
      this.navbar.nativeElement.classList.remove('show');
    }
  }
}
