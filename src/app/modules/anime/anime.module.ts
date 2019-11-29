import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeTopComponent } from './components/anime-top/anime-top.component';
import { IAnimeService, AnimeService } from './anime.service';
import { IApiService } from 'src/app/core/services/api.service';


@NgModule({
  declarations: [AnimeListComponent, AnimeTopComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ],
  providers: [
    {
      provide: IAnimeService,
      useClass: AnimeService,
      deps: [IApiService]
    }
  ]
})
export class AnimeModule { }
