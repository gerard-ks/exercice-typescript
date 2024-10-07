import { Notification } from "../interfaces/notification.interface";

export class PushNotification implements Notification {

    send(): void {
         console.log("Envoi d'une notification push");
    }
    
}