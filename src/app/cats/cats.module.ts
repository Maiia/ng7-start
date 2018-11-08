import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CatsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [CatsComponent]
})
export class CatsModule { }

export function HttpLoaderFactory(http: HttpClient) {
  console.log(2, `${environment.i18nPrefix}/assets/i18n/cats/`);
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/cats/`,
    '.json'
  );
}
