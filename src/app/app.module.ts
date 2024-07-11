import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { FooterComponent } from './footer/footer.component';
import { NextReleasesComponent } from './next-releases/next-releases.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    InputQuantityComponent,
    CinemaHomeComponent,
    FooterComponent,
    NextReleasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
