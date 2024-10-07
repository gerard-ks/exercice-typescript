import { Notification } from "../interfaces/notification.interface";

export function sendNotifications<T extends Notification>(notifications: T[]): void {
    notifications.forEach((notification: T) => notification.send());
}
