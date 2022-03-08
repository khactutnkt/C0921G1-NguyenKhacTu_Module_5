import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    StockStatusComponent,
    ProductPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
