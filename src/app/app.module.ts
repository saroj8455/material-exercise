import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { TableComponent } from './components/table/table.component';

import { AddressComponent } from './components/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ErrorPageComponent,
    DashboardComponent,
    TableComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
