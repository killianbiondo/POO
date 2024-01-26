import Animal from './animal.js';

export default class Zoo {
    private _animaux: Animal[] = [];

    public ajouterAnimal(animal: Animal): void {
        this._animaux.push(animal);
    }

    public afficherAnimaux(): void {
        console.log("Animaux dans le zoo:");
        this._animaux.forEach((animal, index) => {
            console.log(`${index + 1}. ${animal._type} - ${animal._nom}`);
        });
    }
}
