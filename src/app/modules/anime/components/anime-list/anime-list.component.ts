import { Component, OnInit } from '@angular/core';
import { IAnimeService } from '../../anime.service';
import { IAnime } from 'src/app/core/models/IAnime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  public animes: IAnime[] = [];

  constructor(private animeService: IAnimeService) { }

  ngOnInit() {
  }

}
