import { Component, Input } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  constructor(private boardService: BoardService) {}
  @Input() pieceId: number = 0;
  @Input() squireId: number = 0;
  get nowPlayer() {
    return this.boardService.nowPlayer;
  }
  get nowPieceId() {
    return this.boardService.getNowPieceId(this.nowPlayer);
  }
  squareClick() {
    this.boardService.playChess(this.squireId, this.nowPieceId);
  }
}
