import { AnimeTopComponent } from './components/anime-top/anime-top.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';


const routes: Routes = [
  {
    path: '',
    component: AnimeListComponent
  },
  {
    path: 'top',
    component: AnimeTopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
