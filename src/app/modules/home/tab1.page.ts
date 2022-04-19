import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/core/game/game.service';
import { Game } from 'src/app/core/game/game.types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  game = new FormGroup({
    turnDuration: new FormControl(30, Validators.required),
    deck: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private gameService: GameService) {}

  openGame(): void {
    this.router.navigate(['/game']);
  }
  hostGame(): void {
    const game = new Game();
    game.deckId = this.game.controls.deck.value;
    game.turnDuration = this.game.controls.turnDuration.value;

    this.gameService.createGame(game).then(() => {}).catch(err => {
      console.log(err);
    });
  }
}
