import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { gameRoutes } from './game.routing';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    GameComponent,
    BoardComponent
  ],
  imports: [
    RouterModule.forChild(gameRoutes),
    CommonModule,
    IonicModule,
    SwiperModule
  ]
})
export class GameModule { }
