import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Mongo} from 'meteor/mongo';
import { Router } from '@angular/router';
import{Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import template from './player.component.html';

@Component({
  selector: 'player',
  template

})

export class PlayerComponent implements OnInit {
  addPlayer: FormGroup;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private router: Router){

  }

  ngOnInit(){
    this.addPlayer = this.formBuilder.group({
      player: ['', Validators.required]
    });
  }

  createPlayer(){

    if(this.addPlayer.valid){
        console.log(this.addPlayer.value);
        Meteor.call('signupApp',this.addPlayer.value);
        this.addPlayer.reset();
        this.router.navigate(['/rounds']);
    }else{
      console.warn('player name is required');
    }

  }



}
