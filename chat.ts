import Animal from './animal.js';

export default class Chat extends Animal {
    private _couleur: string;

    constructor(nom: string, couleur: string, type: string, age: number) {
        super(nom, type, age);
        this._couleur = couleur;
    }

    public faireDuBruit(): void {
        console.log(`${this._nom} miaule.`);
    }

    public manger(): void {
        console.log("L'animal mange.");
    }

    public afficherCouleur(): void {
        console.log(`Le chat est de couleur ${this._couleur}.`);
    }
}
