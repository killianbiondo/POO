export default class Animal {
    public _nom: string;
    public _type: string;
    protected _age: number;
    static _nombreAnimaux: number = 0;

    constructor(nom: string, type: string, age:number) {
        this._nom = nom;
        this._type = type;
        this._age = age;
        Animal._nombreAnimaux++;
    }

    public faireDuBruit(): void {
        console.log(`${this._nom} fait un bruit indéfinissable.`);
    }

    public manger(): void {
        console.log("L'animal mange.");
    }

    public mouvement(): void {
        console.log(`${this._nom} se déplace.`);
    }

    static calculerAgeMoyen(animaux: Animal[]): number {
        if (animaux.length === 0) return 0;

        let totalAge = 0;
        for (const animal of animaux) {
            totalAge += animal._age;
        }

        return totalAge / animaux.length;
    }
}
