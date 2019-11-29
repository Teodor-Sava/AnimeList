import { Injectable } from '@angular/core';
import { IApiService } from 'src/app/core/services/api.service';
import { IAnime } from 'src/app/core/models/IAnime';

@Injectable()
export abstract class IAnimeService {
    abstract getAnimes(): IAnime[];
    abstract getAnimeById(): IAnime;
}

export class AnimeService implements IAnimeService {

    constructor(private apiService: IApiService) {

    }

    public getAnimes(): IAnime[] {

        return [];
    }

    public getAnimeById(): IAnime {
        return {};
    }
}