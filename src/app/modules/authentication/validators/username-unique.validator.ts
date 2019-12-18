import { Directive } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IAuthenticationService } from '../authentication.service';

export function uniqueUsernameValidator(authenticationService: IAuthenticationService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return authenticationService.checkIfUsernameIsAvailable(control.value)
            .pipe(
                map(isUnique => { 
                    console.log(isUnique);
                    return (isUnique ? { uniqueUsername: true } : null)}),
                catchError(() => null)
            );
    };
}

@Directive({
    selector: '[userNameUnique][formControlName],[mobNumExists][formControl],[mobNumExists][ngModel]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UsernameUnique, multi: true }]
})
export class UsernameUnique implements AsyncValidator {
    constructor(private authenticationService: IAuthenticationService) { }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors> {
        console.log(uniqueUsernameValidator(this.authenticationService)(control));
        return uniqueUsernameValidator(this.authenticationService)(control);
    }
}
