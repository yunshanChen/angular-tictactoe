import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}
  board: Square[] = [
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
    { pieceId: 0 },
  ];
  history: BoardHistory[] = [];
  nowPlayer: String = 'A';
  statusMessage: String = '現在輪到玩家A';
  playerInfo: PlayerInfo[] = [
    { player: 'A', pieceId: 1 },
    { player: 'B', pieceId: 2 },
  ];
  winPattern: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winner: string = 'N';

  setPlayerInfo(playerAPieceId: number, playerBPieceId: number) {
    this.playerInfo[0].pieceId = playerAPieceId;
    this.playerInfo[1].pieceId = playerBPieceId;
  }

  playChess(squareId: number, nowPieceId: number) {
    if (this.winner !== 'N') {
      let message = '已經有勝負了，';
      switch (this.winner) {
        case 'A':
          message += 'A獲勝！';
          break;
        case 'B':
          message += 'B獲勝！';
          break;
        case 'Duce':
          message += '平手！';
          break;
      }
      alert(message);
    } else if (this.board[squareId].pieceId) {
      alert('這裡已經下過了');
    } else {
      //圖案畫上版面
      this.board[squareId].pieceId = nowPieceId;
      //新增歷史紀錄
      this.history.push({ player: this.nowPlayer, squareId: squareId });
      //變更目前玩家
      this.nowPlayer === 'A' ? (this.nowPlayer = 'B') : (this.nowPlayer = 'A');
      this.winner = this.isWin(this.board);
      if (this.winner === 'Duce') {
        this.statusMessage = '遊戲結束，平手！';
      } else if (this.winner === 'N') {
        this.statusMessage = '現在輪到玩家' + this.nowPlayer;
      } else {
        this.statusMessage = '遊戲結束，玩家' + this.winner + '獲勝！';
      }
    }
  }

  getNowPieceId(player: String): number {
    return player === 'A'
      ? this.playerInfo[0].pieceId
      : this.playerInfo[1].pieceId;
  }

  isWin(board: Square[]): 'A' | 'B' | 'Duce' | 'N' {
    let playerAPiece: number[] = [];
    let playerBPiece: number[] = [];
    console.log(board);
    // 取得兩個玩家下棋的位置
    for (let i = 0; i < board.length; i++) {
      if (board[i].pieceId === this.playerInfo[0].pieceId) {
        playerAPiece.push(i);
      } else if (board[i].pieceId === this.playerInfo[1].pieceId) {
        playerBPiece.push(i);
      }
    }
    //判斷下棋的位置是否為winPattern
    for (let i = 0; i < this.winPattern.length; i++) {
      let isPlayerAWin: boolean = this.winPattern[i].every((winPlace) =>
        playerAPiece.includes(winPlace)
      );
      let isPlayerBWin: boolean = this.winPattern[i].every((winPlace) =>
        playerBPiece.includes(winPlace)
      );
      if (isPlayerAWin) {
        console.log(playerAPiece);
        console.log(playerBPiece);
        return 'A';
      } else if (isPlayerBWin) {
        console.log(playerAPiece);
        console.log(playerBPiece);
        return 'B';
      }
    }
    if (this.history.length === 9) {
      console.log(playerAPiece);
      console.log(playerBPiece);
      return 'Duce';
    } else {
      return 'N';
    }
  }

  resetBoard() {
    this.board = [
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
      { pieceId: 0 },
    ];
    this.history = [];
    this.nowPlayer = 'A';
    this.statusMessage = '現在輪到玩家A';
    this.winner = 'N';
  }
}

export interface Square {
  pieceId: number;
}
export interface BoardHistory {
  player: String;
  squareId: number;
}
export interface PlayerInfo {
  player: String;
  pieceId: number;
}
