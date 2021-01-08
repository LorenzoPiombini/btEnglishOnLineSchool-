import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { ErroInterceptor } from './core/Interceptors/error.interceptor';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  HomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

