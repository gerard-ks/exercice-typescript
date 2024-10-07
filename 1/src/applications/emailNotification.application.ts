import { Notification } from "../interfaces/notification.interface";

export class EmailNotification implements Notification {

     send(): void {
        console.log("Envoi d'une notification par email");
     }

}