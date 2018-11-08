import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Interceptor } from './http.interceptor.service';
import { AppErrorHandler } from './error-handler.service';
import { CustomSerializer } from './custom-router-state-serializer';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { reducers, metaReducers } from './core.state';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from '../cats/cats.effects';
import { CatsOwnersEffects } from '../cats/cats-owners-store/cats-owners.effects';

@NgModule({
  imports: [
    // angular
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      CatsEffects,
      CatsOwnersEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular NgRx Store' }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  exports: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}


export function HttpLoaderFactory(http: HttpClient) {
  console.log(1);
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/app/`,
    '.json'
  );
}
