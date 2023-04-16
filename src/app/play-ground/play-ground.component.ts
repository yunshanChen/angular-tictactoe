import { Component } from '@angular/core';
import { BoardService } from '../board.service';
import { BUGCATS } from '../mock-bucats';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css'],
})
export class PlayGroundComponent {
  constructor(private boardService: BoardService) {}
  playerAPieceName: String = BUGCATS[this.playerInfo[0].pieceId - 1].name;
  playerBPieceName: String = BUGCATS[this.playerInfo[1].pieceId - 1].name;
  get playerInfo() {
    return this.boardService.playerInfo;
  }
  get statusMessage() {
    return this.boardService.statusMessage;
  }
  get winner() {
    return this.boardService.winner;
  }
  resetBoard() {
    this.boardService.resetBoard();
  }
}
