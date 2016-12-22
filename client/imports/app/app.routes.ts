import {Route} from '@angular/router';
import {Meteor} from 'meteor/meteor';

import { AppComponent } from './app.component.web';

import {LoginComponent} from './auth/login.component.web';
import {SignupComponent} from "./auth/singup.component";
import {RecoverComponent} from "./auth/recover.component";

import {DashComponent} from './dash/dash.component';
import{ UsersFormComponent } from './dash/users-form.component';
import {WordsFormComponent} from './dash/words-form.component';
import {WordsListComponent} from './dash/words-list.component';
import {UsersListComponent} from './dash/users-list.component';


import{PlayerComponent} from './hangman/player.component';
import{ RoundComponent } from './hangman/rounds.component';
import {UpsComponent} from './hangman/ups.component';
import {WinnerComponent} from './hangman/winner.component';


export const routes: Route = [
  { path: '', component: DashComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'rounds', component: RoundComponent },
  { path: 'sorry', component: UpsComponent },
  { path: 'winner', component: WinnerComponent },
  { path: 'new_user', component: UsersFormComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'new_word', component: WordsFormComponent },
  { path: 'words', component: WordsListComponent }



];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
