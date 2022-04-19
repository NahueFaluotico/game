import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    height: 400,
    autoHeight: false,
    slidesPerView: 2
  };
  playerListModalIsOpen = false;
  counter = 30;
  turnInterval = 30;
  turnTimer = setInterval(() => {
    this.counter--;
  }, 1000);;
  isPaused = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      clearInterval(this.turnTimer);
    } else {
      this.turnTimer = setInterval(() => {
        this.counter--;
        this.changeDetectorRef.markForCheck();
      }, 1000);
    }
  }
  openPlayerList(): void {
    this.playerListModalIsOpen = true;
  }
  closePlayerList(): void {
    this.playerListModalIsOpen = false;
  }
}
