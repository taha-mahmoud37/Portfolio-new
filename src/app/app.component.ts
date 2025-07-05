import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  loading = false;
  constructor(private languageService: LanguageService) {
    this.languageService.init();
  }

  ngOnInit(): void {
    this.loadingSpinner();
  }
  loadingSpinner() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
