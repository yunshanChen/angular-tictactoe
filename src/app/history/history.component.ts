import { Component } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  constructor(private boradService: BoardService) {}

  get history() {
    return this.boradService.history;
  }
}
