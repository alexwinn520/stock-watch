import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';

import { TickerService } from './services/ticker.service';

import { TickerFilterPipe } from './pipes/ticker-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    TickerSearchComponent,
    TickerFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TickerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
