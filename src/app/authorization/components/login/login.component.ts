import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as AuthorizationActions from '../../authorization.actions';

export interface User {
  login: string;
  password: string;
}

@Component({
  selector: 'bb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'login',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Login',
        placeholder: 'Enter login',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        required: true
      }
    }
  ];

  constructor(private http: HttpClient, private store: Store<any>) {}

  ngOnInit() {}

  submit(model: User) {
    console.log(model);
    this.store.dispatch(new AuthorizationActions.LoginUser(model));
  }
}
