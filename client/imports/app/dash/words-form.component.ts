import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Meteor} from 'meteor/meteor';

import template from './words-form.component.html';


@Component({
  selector: 'words-form',
  template
  //directives: []

})

export class WordsFormComponent implements OnInit{
  addWord: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.addWord = this.formBuilder.group({
      word: ['', Validators.required]
    });
  }


  createWord(){
    if(!Meteor.userId()){
      alert('invalid operation');
      return;
    }
    if(this.addWord.valid){
        console.log('value ' + JSON.stringify(this.addWord.value));
        Meteor.call('registerWords',this.addWord.value);
        this.addWord.reset();
    }

  }


}
