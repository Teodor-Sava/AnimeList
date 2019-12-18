import { IApiService } from 'src/app/core/services/api.service';
import { ApiService } from './../../core/services/api.service';
import { IUserCredentials } from './../../core/models/IUser';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export abstract class IAuthenticationService {
    abstract register(userCredentials: IUserCredentials): Observable<any>;

    abstract login(userCredentials: IUserCredentials): Observable<any>;

    abstract loginWithGoogle(): Observable<any>;

    abstract checkIfUsernameIsAvailable(username: string): Observable<boolean>;
}

export class AuthenticationService implements IAuthenticationService {

    constructor(private apiService: IApiService) { }

    public register() {
        return of(true);
    }

    public login(userCredentials: IUserCredentials): Observable<any> {
        return of(true);
    }

    public loginWithGoogle(): Observable<any> {
        return of(true);
    }

    public checkIfUsernameIsAvailable(username: string): Observable<boolean> {
        return of(false);
    }
}
