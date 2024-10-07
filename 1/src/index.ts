import { EmailNotification } from './applications/emailNotification.application';
import { PushNotification } from './applications/pushNotification.application';
import { SmsNotification } from './applications/smsNotification.application';
import { Notification } from './interfaces/notification.interface';
import { sendNotifications } from './services/sendNotifications.service';


(() => {
    const emailNotification: EmailNotification = new EmailNotification();
    const smsNotification: SmsNotification = new SmsNotification();
    const pushNotification: PushNotification = new PushNotification();

    const notifications: Notification[] = [emailNotification, smsNotification, pushNotification];

    sendNotifications(notifications);
})();






