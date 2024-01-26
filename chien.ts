import Animal from './animal.js';

export default class Chien extends Animal {
    constructor(nom: string, type: string, age: number) {
        super(nom, type, age);
    }

    public faireDuBruit(): void {
        console.log(`${this._nom} aboie.`);
    }

    public manger(): void {
        console.log(`Le chien mange avec enthousiasme.`);
    }
}
