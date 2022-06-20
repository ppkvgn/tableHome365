import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TableComponent } from './main-layout/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {AppRoutingModule} from "./app-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PaginationComponent } from './main-layout/pagination/pagination.component';
import { FilterComponent } from './main-layout/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TableComponent,
    PaginationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
