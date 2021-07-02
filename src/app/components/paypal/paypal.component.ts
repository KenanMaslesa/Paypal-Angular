import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  constructor(public router: Router){
    render({
      id: "#paypalButtons",
      currency: "USD",
      value: "1",
      onApprove: (details) =>{
        console.log(details);
        alert(details);
        this.router.navigate(['successful-payment'])
      }
    })
  }

  ngOnInit(): void {
  }

}
