import { CreditCardPayment, PayPalPayment, CashPayment, handlePayment } from '../../Solid/3.Lsp/main';

describe('Payment Processor', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    describe('CreditCardPayment', () => {
        it('should process credit card payment successfully', () => {
            const creditCardPayment = new CreditCardPayment();
            const result = handlePayment(creditCardPayment, 100);

            expect(result).toBe(true);
            expect(consoleSpy).toHaveBeenCalledTimes(3);
            expect(consoleSpy.mock.calls[0][0]).toContain('credit card');
            expect(consoleSpy.mock.calls[1][0]).toContain('Validating credit card details');
            expect(consoleSpy.mock.calls[2][0]).toContain('Charging the credit card');
        });
    });

    describe('PayPalPayment', () => {
        it('should process PayPal payment successfully', () => {
            const payPalPayment = new PayPalPayment();
            const result = handlePayment(payPalPayment, 200);

            expect(result).toBe(true);
            expect(consoleSpy).toHaveBeenCalledTimes(3);
            expect(consoleSpy.mock.calls[0][0]).toContain('PayPal');
            expect(consoleSpy.mock.calls[1][0]).toContain('Redirecting to PayPal');
            expect(consoleSpy.mock.calls[2][0]).toContain('Completing PayPal transaction');
        });
    });

    describe('CashPayment', () => {
        it('should fail cash payment processing', () => {
            const cashPayment = new CashPayment();
            const result = handlePayment(cashPayment, 50);

            expect(result).toBe(false);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.mock.calls[0][0]).toContain('cash');
            expect(consoleSpy.mock.calls[1][0]).toContain('Cash payments require in-person transaction');
        });
    });
});