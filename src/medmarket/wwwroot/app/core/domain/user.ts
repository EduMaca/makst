export class User {
    Email: string;
    Password: string;
    RememberMe: boolean;

    constructor(email: string,
        password: string) {
        this.Email = email;
        this.Password = password;
        this.RememberMe = false;
    }
}