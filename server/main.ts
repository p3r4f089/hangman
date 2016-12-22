import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import './imports/publications/words';
import './imports/publications/users';
import '../both/methods/words.methods';
import '../both/methods/users.methods';



Meteor.startup(() => {

  if (Meteor.users.find().count() === 0) {
     Accounts.createUser({
       username: 'admin  ',
       email: 'admin@hangman.com',
       password: '#hangman'
     });
   }


});
