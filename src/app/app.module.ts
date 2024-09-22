import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './screens/start/start.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { DatosComponent } from './screens/register/datos/datos.component';
import { FinishComponent } from './screens/register/finish/finish.component';
import { PhoneComponent } from './screens/register/phone/phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    HomeComponent,
    DatosComponent,
    FinishComponent,
    PhoneComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'md', innerHTMLTemplatesEnabled: true }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
