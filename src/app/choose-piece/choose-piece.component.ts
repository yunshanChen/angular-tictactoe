import { Component } from '@angular/core';
import { BoardService } from '../board.service';
import { BUGCATS } from '../mock-bucats';

@Component({
  selector: 'app-choose-piece',
  templateUrl: './choose-piece.component.html',
  styleUrls: ['./choose-piece.component.css'],
})
export class ChoosePieceComponent {
  constructor(private boardService: BoardService) {}

  playerAPieceName: String = BUGCATS[this.playerInfo[0].pieceId - 1].name;
  playerBPieceName: String = BUGCATS[this.playerInfo[1].pieceId - 1].name;
  playerAPieceId: number = this.playerInfo[0].pieceId;
  playerBPieceId: number = this.playerInfo[1].pieceId;

  get playerInfo() {
    return this.boardService.playerInfo;
  }

  setPlayerPiece(player: String, pieceId: number) {
    player === 'A'
      ? (this.playerAPieceId = pieceId)
      : (this.playerBPieceId = pieceId);
  }
  setPiece() {
    if (this.playerAPieceId === this.playerBPieceId) {
      alert('不能選擇一樣的棋子！');
      console.log(this.boardService.playerInfo);
    } else {
      this.boardService.setPlayerInfo(this.playerAPieceId, this.playerBPieceId);
      this.playerAPieceName = BUGCATS[this.playerInfo[0].pieceId - 1].name;
      this.playerBPieceName = BUGCATS[this.playerInfo[1].pieceId - 1].name;
      this.boardService.resetBoard();
      alert('設定完成！');
      console.log(this.boardService.playerInfo);
    }
  }
}
