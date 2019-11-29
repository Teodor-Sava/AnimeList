import { Injectable } from '@angular/core';

@Injectable()
export abstract class IApiService {
    abstract constructUrl(urlPath: string, params: any): string;
}

const apiRoutesMap = {
    animes: {
        url: 'animes',
        children: {
            animesById: 'animes/{$animeId}'
        }
    }
};

export class ApiService implements IApiService {
    private _baseUrl: string;
    constructor() {

    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    set baseUrl(value: string) {
        this._baseUrl = value;
    }

    public constructUrl(urlPath: string, params: any): string {
        let keysOfPath = urlPath.split('.');

        return '';
    }
}