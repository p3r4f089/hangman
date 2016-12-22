import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Word } from '../models/words.model';

export const Words = new MongoObservable.Collection<Word>('words');


function loggedIn() {
  return !!Meteor.user();
}

Words.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
