// Payment interface to define contract
export interface Payment {
    processPayment(amount: number): boolean;
}

// Base abstract class with common logging
abstract class BasePaymentProcessor implements Payment {
    protected logPaymentAttempt(amount: number, paymentType: string): void {
        console.log(`Processing ${paymentType} payment of $${amount}`);
    }

    abstract processPayment(amount: number): boolean;
}

export class CreditCardPayment extends BasePaymentProcessor {
    processPayment(amount: number): boolean {
        this.logPaymentAttempt(amount, 'credit card');
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
        return true;
    }
}

export class PayPalPayment extends BasePaymentProcessor {
    processPayment(amount: number): boolean {
        this.logPaymentAttempt(amount, 'PayPal');
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
        return true;
    }
}

export class CashPayment extends BasePaymentProcessor {
    processPayment(amount: number): boolean {
        this.logPaymentAttempt(amount, 'cash');
        console.log("Cash payments require in-person transaction");
        return false;
    }
}

// Refactored handler that works with the Payment interface
export function handlePayment(payment: Payment, amount: number): boolean {
    return payment.processPayment(amount);
}