/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

// Notification interface
export interface NotificationService {
    sendNotification(message: string): void;
}

// Email notification implementation
export class EmailNotificationService implements NotificationService {
    sendNotification(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

// SMS notification implementation
export class SMSNotificationService implements NotificationService {
    sendNotification(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}

// High-level module depends on abstraction
export class NotificationManager {
    constructor(private notificationService: NotificationService) {}

    sendNotification(message: string): void {
        this.notificationService.sendNotification(message);
    }
}