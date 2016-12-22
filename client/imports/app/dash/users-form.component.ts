import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import template from './users-form.component.html';

@Component({
  selector: 'users-form',
  template

})

export class UsersFormComponent implements OnInit{
  addFormUser: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.addFormUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });


  }

  createUser(){

    if(!Meteor.userId()){
      alert('invalid operation');
      return;
    }

    if(this.addFormUser.valid){
        console.log(this.addFormUser.value);
        Meteor.call('regUser', this.addFormUser.value);
        this.addFormUser.reset();
        alert('User Created!');
    }else{
      alert('empty form');
    }
  }


}
