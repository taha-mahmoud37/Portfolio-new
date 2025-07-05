import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'getlang',
  standalone: true,
})
export class GetlangPipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(object: any, field: string): string {
    const lang = this.languageService.currentLang;
    const fallback = object?.[field] ?? '';
    const arabic = object?.[`${field}Ar`] ?? '';
    return lang === 'ar' ? arabic || fallback : fallback;
  }
}
