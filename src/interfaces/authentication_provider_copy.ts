interface IAuthenticationProvider {
    identifier: string;
    login: () => number; // arrow function
    getManagerName(number: any): string; 
}