import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routes} from './app-routing';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {domain, clientID} from 'auth_config'
import {APP_BASE_HREF} from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';

const env = environment;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AuthModule.forRoot({
      domain: domain,
      clientId: clientID
    }),
    MatMenuModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FormBuilder,{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
