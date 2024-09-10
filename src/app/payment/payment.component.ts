import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  stripe: Stripe | null = null;
  cardElement: StripeCardElement | null = null;
  cardError: string | null | undefined = null;
  isProcessing = false;
  successMessage:string|null = null;
  showSpinnerAfterSuccess = false;


  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PxQZyIUmQzkVZO2uZ1vcmf2www9JNFM2oBi11aPoMcClvxhZ8RR2vmuBxfJcBw9yeya499pSKupWoDyefZ2k2Fz00XBk7YYYT');
    const elements = this.stripe!.elements();
    console.log("the value is ",elements);
    this.cardElement = elements.create('card');
    this.cardElement.mount('#card-element');

    this.cardElement.on('change', (event) => {
      this.cardError = event.error ? event.error.message : null;
    });
  }

  async handlePayment() {
    this.isProcessing = true;
    if (!this.stripe || !this.cardElement) {
      this.cardError = "the stripe is not initialized properly";
      this.isProcessing = false;
      return;
    }

    const { paymentMethod, error } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement
    });

    if (error) {
      this.cardError = error.message
    } else {
      console.log("payment method created", paymentMethod);

      this.showSpinnerAfterSuccess = true;

      setTimeout(()=>{
        this.successMessage="payment is successfully!"
        this.showSpinnerAfterSuccess = false
      } ,3000);
      }
    this.isProcessing = false;
  }
}
