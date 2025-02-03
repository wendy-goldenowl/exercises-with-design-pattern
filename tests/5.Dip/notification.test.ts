import { EmailNotificationService, SMSNotificationService, NotificationManager } from '../../Solid/5.Dip/main';
describe('Notification Services', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    describe('EmailNotificationService', () => {
        it('should send email notification', () => {
            const emailService = new EmailNotificationService();
            const notificationManager = new NotificationManager(emailService);

            notificationManager.sendNotification('Test Email');

            expect(consoleSpy).toHaveBeenCalledWith('Sending email with message: Test Email');
        });
    });

    describe('SMSNotificationService', () => {
        it('should send SMS notification', () => {
            const smsService = new SMSNotificationService();
            const notificationManager = new NotificationManager(smsService);

            notificationManager.sendNotification('Test SMS');

            expect(consoleSpy).toHaveBeenCalledWith('Sending SMS with message: Test SMS');
        });
    });
});