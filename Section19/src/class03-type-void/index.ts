function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const person = {
    firstName: 'Fernanda',
    lastName: 'Oliveira',

    showName(): void {
        console.log(this.firstName + ' ' + this.lastName);
    },
};

noReturn('Fernanda', 'Oliveira');
person.showName();

// Module mode
export default person;
