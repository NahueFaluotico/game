import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Game } from './game.types';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private afStore: AngularFirestore) { }

  createGame(game: Game): Promise<any> {
    const gameRef: AngularFirestoreDocument<any> = this.afStore.doc(`games/532235235235`);
    const gameData: Game = { ...game };
    return gameRef.set(gameData, {merge: true});
  }
}
