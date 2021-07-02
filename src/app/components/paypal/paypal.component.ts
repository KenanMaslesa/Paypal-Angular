import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  
  constructor(public router: Router){}

  product = {
    price: 10,
    description: 'The best course ever',
    img: 'assets/ng-course.jpeg'
  };

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.router.navigate(['successful-payment'])
          console.log(order);
        },
        onError: err => {
          alert(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
