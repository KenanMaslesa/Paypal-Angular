import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalComponent } from './components/paypal/paypal.component';
import { SuccessfulPaymentComponent } from './components/successful-payment/successful-payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/paypal', pathMatch: 'full' },
  {path: 'paypal', component: PaypalComponent},
  {path: 'successful-payment', component: SuccessfulPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
