import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }

export function HttpLoaderFactory(http: HttpClient) {
  console.log(2, `${environment.i18nPrefix}/assets/i18n/counter/`);
  // return new TranslateHttpLoader(
  //   http,
  //   `${environment.i18nPrefix}/assets/i18n/counter/`,
  //   '.json'
  // );

  return new TranslateHttpLoader(http, './assets/i18n/counter/', '.json');
}

