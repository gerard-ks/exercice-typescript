import { User } from "../applications/user.application";

export function validateNotEmpty(target: User, propertyKey: keyof User): void {
    let value = target[propertyKey];

     const getter = () => value;

     const setter = (newValue: unknown) => {
        if (typeof newValue !== 'string' || newValue.trim() === '') {
            throw new Error(`${propertyKey} : ne peut être vide ou n'est pas une chaîne de caractères`);
        }
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
    
}