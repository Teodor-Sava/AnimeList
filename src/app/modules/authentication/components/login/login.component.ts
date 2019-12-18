import { IUserCredentials } from './../../../../core/models/IUser';
import { IAuthenticationService } from './../../authentication.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameUnique, uniqueUsernameValidator } from '../../validators/username-unique.validator';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private authenticationService: IAuthenticationService) { }

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.required]]
    });

    this.onChanges();
  }

  public login() {

  }

  get f() { return this.userLoginForm.controls; }

  public register(userCredentials: IUserCredentials) {
    if (!this.userLoginForm.valid) {
      return;
    }
    this.authenticationService.login(userCredentials)
      .subscribe(() => {
        console.log('loggedIn');
      })
  }

  public logout() {

  }

  public loginWithGoogle() {

  }

  private onChanges() {
    this.userLoginForm.get('username').valueChanges
      .pipe(
        filter(username => {
          console.log('usernma', username);
          return username.length > 3;
        }),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.userLoginForm.get('username').setAsyncValidators(uniqueUsernameValidator(this.authenticationService));
      });
  }
}
