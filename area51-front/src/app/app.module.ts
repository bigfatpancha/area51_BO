import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SalesComponent } from './sales/sales/sales.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SalesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
