import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class IAuthenticationStateService {
    abstract setLoggedinStatus(loggedInStatus: boolean): void;
}

export class AuthenticationStateService implements IAuthenticationStateService {
    private _isLoggedIn: boolean;
    private loggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
        this.loggedInStatus.subscribe(loggedInStatus => this.setLoggedinStatus(loggedInStatus));
    }

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    public setLoggedinStatus(loggedInStatus: boolean): void {
        this._isLoggedIn = loggedInStatus;
    }
}