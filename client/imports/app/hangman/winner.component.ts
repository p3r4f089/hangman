import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import {Mongo} from 'meteor/mongo';
import{Meteor} from 'meteor/meteor';
import {InjectUser} from "angular2-meteor-accounts-ui";

import template from './winner.component.html';


@Component({
  selector: 'winner',
  template

})
@InjectUser('user')
export class WinnerComponent {

  constructor(private route: ActivatedRoute){

  }


}
