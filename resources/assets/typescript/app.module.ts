/// <reference path="../../../typings/index.d.ts" />

/* System */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/* Routing */
import { Routing } from './app.routes';

/* App */
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent, ProductListComponent } from './product/product.component';

// ~

@NgModule({
    imports: [ FormsModule, BrowserModule, HttpModule, RouterModule, Routing ],
    declarations: [
        AppComponent,
        IndexComponent,
        DashboardComponent,
        CategoryComponent,
        ProductComponent, ProductListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }