import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { SuccessfulPaymentComponent } from './components/successful-payment/successful-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PaypalComponent,
    SuccessfulPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
