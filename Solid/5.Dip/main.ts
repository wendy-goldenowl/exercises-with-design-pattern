
class EmailService {
    sendEmail(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

class SendNotification {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    sendNotification(message: string): void {
        this.emailService.sendEmail(message);
    }
}

const notification = new SendNotification();
notification.sendNotification("Hello, this is a notification!");