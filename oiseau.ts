import Animal from './animal.js';

export default class Oiseau extends Animal {
    constructor(nom: string, type: string, age: number) {
        super(nom, type, age);
    }

    public mouvement(): void {
        console.log(`${this._nom} vole.`);
    }
}
