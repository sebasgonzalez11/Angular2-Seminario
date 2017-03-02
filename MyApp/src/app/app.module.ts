import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {BeerDataService} from "./beer-data.service";

@NgModule({
    declarations: [
        AppComponent,
        BeerCartComponent,
        BeerListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [BeerDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }