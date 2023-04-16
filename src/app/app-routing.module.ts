import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePieceComponent } from './choose-piece/choose-piece.component';
import { PieceDetailComponent } from './piece-detail/piece-detail.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { PieceComponent } from './piece/piece.component';

const routes: Routes = [
  { path: '', redirectTo: '/choose-piece', pathMatch: 'full' },
  { path: 'choose-piece', component: ChoosePieceComponent },
  { path: 'piece-detail', component: PieceDetailComponent },
  { path: 'play-ground', component: PlayGroundComponent },
  { path: 'piece/:id', component: PieceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
