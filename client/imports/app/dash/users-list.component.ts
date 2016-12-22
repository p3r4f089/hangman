import {Component, OnInit} from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorComponent } from 'angular2-meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Router } from '@angular/router';
import {Meteor} from 'meteor/meteor';
import template from './users-list.component.html';

import 'rxjs/add/operator/map';

import { Users } from '../../../../both/collections/users.collection';
import { User } from '../../../../both/models/user.model';



@Component({
  selector: 'users-list',
  template
})

export class UsersListComponent{

users : Observable<User[]>;
user: Meteor.User;

  constructor(){
    this.users = Users.find({});
    //console.log(this.users);
  }

  removeUser(user){
    console.warn('remove user  ' + user._id + ' ' +user.profile.name);
    Meteor.call('RemoveUser', user._id);
  }


}
