import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch/batch.component';
import { SourceDonneeComponent } from './source-donnee/source-donnee.component';
import { ChartComponent } from './chart/chart.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    SourceDonneeComponent,
    ChartComponent,
    ErrorComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule
   

   
  ],
  providers:[],
  bootstrap: [AppComponent]


})
export class AppModule { }
