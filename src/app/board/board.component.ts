import { Component } from '@angular/core';
import { BoardService, Square } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  constructor(private boardService: BoardService) {}

  get squares(): Square[] {
    return this.boardService.board;
  }
}
