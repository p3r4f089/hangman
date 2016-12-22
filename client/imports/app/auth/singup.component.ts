import {Component, OnInit, NgZone} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';

import template from './signup.component.html';

@Component({
  selector: 'signup',
  template
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string;

  constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  signup() {
    if (this.signupForm.valid) {
      var data = {
        name : this.signupForm.value.username,
        email: this.signupForm.value.email,
        pass: this.signupForm.value.password
      };

      Meteor.call('signupApp', data, (error) =>{
        if(error){
          console.error(error);
        }else{
          console.log('usuario creado ');
          this.signupForm.reset();
        }
      });
    }
  }
}
