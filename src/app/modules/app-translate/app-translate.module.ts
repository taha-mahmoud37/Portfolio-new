import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const httpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

const translateLoader: Provider = {
  provide: TranslateLoader,
  useFactory: httpLoaderFactory,
  deps: [HttpClient],
};

@NgModule({})
export class AppTranslateModule {
  static forRoot(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      loader: translateLoader,
    });
  }
}
