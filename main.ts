import Chien from './chien.js';
import Chat from './chat.js';
import Oiseau from './oiseau.js';
import Zoo from './zoo.js';
import Animal from './animal.js';

const zoo = new Zoo();
const monChien = new Chien("Buddy", "Chien", 5);
const monChat = new Chat("Whiskers", "noir", "Chat", 7);
const monOiseau = new Oiseau("Tweetie", "Oiseau", 2);
const listAnimal: Animal[] = [monChat, monChien, monOiseau];

monChat.manger();
monChien.manger();


monChat.mouvement();
monOiseau.mouvement();


zoo.ajouterAnimal(monChien);
zoo.ajouterAnimal(monChat);
zoo.ajouterAnimal(monOiseau);

zoo.afficherAnimaux();

const ageMoy = Animal.calculerAgeMoyen(listAnimal);
console.log(`l\'age moyen est ${ageMoy}` );