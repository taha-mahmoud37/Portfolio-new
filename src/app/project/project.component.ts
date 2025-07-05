import { Component, input, OnInit } from '@angular/core';
import { GetlangPipe } from '../@pipes/getlang.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [GetlangPipe, TranslatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  project = input<any>();
  constructor(private LanguageService: LanguageService) {
    // Initialization logic can go here if needed
  }
  get lang() {
    return this.LanguageService.currentLang;
  }
  ngOnInit() {}
}
