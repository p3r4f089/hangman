import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import {Mongo} from 'meteor/mongo';
import{Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import template from './dash.component.html';


@Component({
  selector: 'dash',
  template  
})

export class DashComponent {

  constructor(private route: ActivatedRoute){

  }

}
