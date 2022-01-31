import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data/app-data';

import { AppComponent } from './app.component';
import { FilterdataPipe } from './pipes/filterdata.pipe';
import { FormsModule } from '@angular/forms';
import { ProductdetailPipe } from './pipes/productdetail.pipe';
import { CustomerdetailPipe } from './pipes/customerdetail.pipe';

@NgModule({
  declarations: [AppComponent, FilterdataPipe, ProductdetailPipe, CustomerdetailPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
