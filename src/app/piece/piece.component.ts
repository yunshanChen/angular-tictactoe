import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugcatService } from '../bugcat.service';
import { bugcat } from '../mock-bucats';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent {
  constructor(
    private route: ActivatedRoute,
    private bugcatService: BugcatService
  ) {}
  bugcat: bugcat | undefined;
  getBugcat() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bugcat = this.bugcatService.getBugcats()[id - 1];
  }
  ngOnInit() {
    this.getBugcat();
  }
}
