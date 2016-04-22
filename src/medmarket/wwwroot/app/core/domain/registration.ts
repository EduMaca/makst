export class Registration {
    Password: string;
    Email: string;

    constructor(email: string, password: string) {
        this.Password = password;
        this.Email = email;
    }
}