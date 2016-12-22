import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import {Mongo} from 'meteor/mongo';
import{Meteor} from 'meteor/meteor';

import template from './ups.component.html';


@Component({
  selector: 'ups',
  template
})

export class UpsComponent {

  constructor(private route: ActivatedRoute){

  }  

}
