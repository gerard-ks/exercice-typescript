import { Notification } from "../interfaces/notification.interface";

export class SmsNotification implements Notification {

    send(): void {
         console.log("Envoi d'une notification par sms");
    }

}