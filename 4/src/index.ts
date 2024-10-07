import { User } from "./applications/user.application";


(() => {
    try {
    const user1: User = new User('Gerard', 'Siaka', 18);

    const user2: User = new User('', 'Siaka', 19);
    } catch (error) {
        console.error(error); 
    }
})();