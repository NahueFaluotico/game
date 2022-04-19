import { User } from '../user/user.types';

export class Game {
  hostUid: string;
  deckId: string;
  gameId: string;
  turnDuration: string;
  players: User[];
  playersAlive: User[];
}
