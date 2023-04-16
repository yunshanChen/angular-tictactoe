import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapooComponent } from './capoo/capoo.component';
import { BlackCapooComponent } from './black-capoo/black-capoo.component';
import { ChickenComponent } from './chicken/chicken.component';
import { ChoosePieceComponent } from './choose-piece/choose-piece.component';
import { PieceDetailComponent } from './piece-detail/piece-detail.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { PieceComponent } from './piece/piece.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CapooComponent,
    BlackCapooComponent,
    ChickenComponent,
    ChoosePieceComponent,
    PieceDetailComponent,
    PlayGroundComponent,
    PieceComponent,
    BoardComponent,
    SquareComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
