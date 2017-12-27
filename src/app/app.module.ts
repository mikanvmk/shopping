import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule,
  MatInputModule, MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SwiperModule} from "angular2-useful-swiper";
import {Home} from "./component/home/home";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    //Component
    Home
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    SwiperModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
