import {Component, OnInit} from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorComponent } from 'angular2-meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Router } from '@angular/router';
import {Meteor} from 'meteor/meteor';
import 'rxjs/add/operator/map';

import {Words}   from '../../../../both/collections/words.collection';
import { Word } from '../../../../both/models/words.model';

import template from './words-list.component.html';

@Component({
  selector: 'words-list',
  template
})

export class WordsListComponent{

words : Observable<Word[]>;

  constructor(){
    this.words = Words.find({});

  }
  removeWord(w){
    console.warn('remove event  ' + w._id);
    Meteor.call('removeWord', w._id);
  }


}
