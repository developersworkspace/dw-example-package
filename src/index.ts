export class Person {

    constructor(private firstname: string, private lastname: string) {

    }

    display() {
        console.log('Hi, I\'m ' + this.firstname + ' ' + this.lastname);
    }
}