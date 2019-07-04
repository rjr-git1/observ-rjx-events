import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { CustomerModule } from './customer/customer.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BilldingModule } from './billding/billding.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomerModule,
    SuppliersModule,
    BilldingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
