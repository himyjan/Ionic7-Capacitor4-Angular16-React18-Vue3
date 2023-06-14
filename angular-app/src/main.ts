import 'zone.js';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, IonicModule.forRoot(), AppRoutingModule),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
  .catch(err => console.log(err));
