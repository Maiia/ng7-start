import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // core & shared
    CoreModule,
    SharedModule,

    // features

    // app
    AppRoutingModule,

    GraphQLModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
